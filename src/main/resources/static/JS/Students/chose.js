$(function () {
    var num="";
    $.post({
        url: "getsession",
        async:false,
        data: {},
        success: function (data) {
            num = data;
            $("#h2").text(num)
        }
    })
    var username="";
    $.post({
        url: "queryone",
        async:false,
        data: {num: num},
        success: function (data) {
            username = data.username;
            document.getElementById('img').setAttribute( 'src',data.title)
            $("#h3").text(username)
        }
    })
    $("#submit").click(function () {
        var class1=$("#class1").val()
        var class2=$("#class2").val()
        var class3=$("#class3").val()
        var class4=$("#class4").val()
        var day=$("#day").val()
        var a=$("#h6").text();
        if (class1==""||class2==""||class3==""||class4==""){
            alert("请选择满课程")
        }else {
            $.post({
                url:"/queryclass_day",
                data: {"num":num,"day":day},
                success:function (data) {
                    if (data.class1!=null){
                        //修改 update
                        $.post({
                            url:"update_classed",
                            data:{"class1":class1,"class2":class2,"class3":class3,"class4":class4,"num":num,"days":day},
                            success:function (data) {
                                alert("修改成功")
                            }
                        })
                    }else {
                        $.post({
                            url:"/up",
                            data:{"class1":class1,"class2":class2,"class3":class3,"class4":class4,"num":num,"day":day},
                            success: function (data) {
                                alert("选课成功")
                            }
                        })
                    }
                    $.ajaxSettings.async = false;
                    $.post({
                        url:"/queryclass",
                        data: {"num":num},
                        success:function (user) {
                            var classes=[]
                            for (var i=0;i<user.length;i++){
                                classes.push(user[i].class1)
                                classes.push(user[i].class2)
                                classes.push(user[i].class3)
                                classes.push(user[i].class4)
                            }
                            // 将不重复的课加到课列表 此时都是id
                            var classee=[] //所有课程列表
                            for(var i=0;i<classes.length;i++){
                                if ($.inArray(classes[i],classee)==-1){
                                    classee.push(classes[i])
                                }
                            }
                            console.log(classee)
                            $.post({
                                url:"queryclass_num",
                                data:{num:num},
                                success:function (data) { // 返回num学生的Score的c_id列表
                                    // 加到s表
                                    for(var i=0;i<classee.length;i++){
                                        if ($.inArray(classee[i],data)==-1){
                                            //若没有 加到成绩表
                                            $.post({
                                                url:"/addClass_to_s",
                                                data:{num:num,c_id:classee[i]},
                                                success:function (data) {
                                                }
                                            })
                                        }else {}
                                    }
                                    // 从s表中删除已弃选的课
                                    // classee是当前已选课id data是Score的c_id列表
                                    for(var i=0;i<data.length;i++){
                                        if ($.inArray(data[i],classee)==-1){
                                            //若没有 删除此课
                                            $.post({
                                                url:"/delClass_to_s",
                                                data:{num:num,c_id:data[i]},
                                                success:function (data) {
                                                }
                                            })
                                        }else {}
                                    }
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})