$(function () {
    $("#t1").hide();
    $("#t2").hide();
    $.ajaxSettings.async = false;
    //先 名字-学号
    $("#bt").click(function () {
        var num="";
        $.post({
            url:"/queryone_name_num",
            data:{"username":$("#select").val()},
            success:function (data) {
                num=data.num;
            }
        })
        $.post({
            url:"/queryclass",
            // num是学号 根据学号查信息
            data: {"num":num},
            success:function (user) {
                // 通过学号查到这个人的信息 在选课信息里查
                // user是个列表
                var classess=[]
                for (var i=0;i<user.length;i++){
                    if (user[i].days==1){
                        classess[0]=user[i].class1
                        classess[1]=user[i].class2
                        classess[2]=user[i].class3
                        classess[3]=user[i].class4
                    }else if (user[i].days==2){
                        classess[4]=user[i].class1
                        classess[5]=user[i].class2
                        classess[6]=user[i].class3
                        classess[7]=user[i].class4
                    }else if (user[i].days==3){
                        classess[8]=user[i].class1
                        classess[9]=user[i].class2
                        classess[10]=user[i].class3
                        classess[11]=user[i].class4
                    }else if (user[i].days==4){
                        classess[12]=user[i].class1
                        classess[13]=user[i].class2
                        classess[14]=user[i].class3
                        classess[15]=user[i].class4
                    }else if (user[i].days==5){
                        classess[16]=user[i].class1
                        classess[17]=user[i].class2
                        classess[18]=user[i].class3
                        classess[19]=user[i].class4
                    }
                }
                let html="";
                let t=1;
                $.ajaxSettings.async = false;
                for (var i = 0; i < classess.length; i+=4){
                    for (var j=i;j<4+i;j++){
                        if (classess[j]!=undefined){
                            $.post({
                                url:"queryone2",
                                data:{id:classess[j]},
                                success:function (data) {
                                    classess[j]=data.classname;
                                }
                            })
                        }else {
                            classess[j]="*未选*"
                        }
                    }
                    html+="<tr>" +
                        "<td>"+("星期"+t)+"</td>" +
                        "<td>"+classess[i]+"</td>" +
                        "<td>"+classess[i+1]+"</td>" +
                        "<td>"+classess[i+2]+"</td>" +
                        "<td>"+classess[i+3]+"</td>" +
                        "</tr>";
                    t++;
                }
                $("#tbody").html(html);
                // 成绩部分
                var score=[]
                var html2=""
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
                        // 将不重复的课加到成绩表
                        var classee=[] //所有课程列表
                        for(var i=0;i<classes.length;i++){
                            if ($.inArray(classes[i],classee)==-1){
                                classee.push(classes[i])
                            }
                        }
                        // 加 学生num:num 课id:classee[i]   score:null
                        for (var i=0;i<classee.length;i++){
                            //查询s表中 这个num是否有classee[i]
                            $.post({
                                url:"querys_num",
                                data:{num:num,c_id:classee[i]},
                                success:function (data) {
                                    score.push(data.score)
                                }
                            })
                        }
                        //把科名 id-->中文
                        $.ajaxSettings.async = false;
                        for (var i = 0; i < classee.length; i++){
                            $.post({
                                url:"queryone2",
                                data:{id:classee[i]},
                                success:function (data) {
                                    classee[i]=data.classname;
                                    html2+="<tr>" +
                                        "<td>"+classee[i]+"</td>" +
                                        "<td>"+(score[i]?score[i]:"未录入")+"</td>" +
                                        "<td>"+(score[i]/20).toFixed(2)+"</td>" +
                                        "</tr>";
                                }
                            })
                        }
                    }
                })
                $("#tbody2").html(html2)
            }
        })
        $("#t1").show();
        $("#t2").show();
    })

})
