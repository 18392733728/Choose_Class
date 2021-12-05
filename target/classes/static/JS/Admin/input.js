$.ajaxSettings.async = false;
$(function () {
    $("#t1").hide()
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
            data: {num:num},
            success:function (user) {
                // user是列表
                var classes=[]
                for (var i=0;i<user.length;i++){
                    classes.push(user[i].class1)
                    classes.push(user[i].class2)
                    classes.push(user[i].class3)
                    classes.push(user[i].class4)
                }
                let html="";
                for (var i = 0; i < classes.length; i+=4){
                    for (var j=i;j<4+i;j++){
                        $.post({
                            url:"queryone2",
                            data:{id:classes[j]},
                            success:function (data) {
                                classes[j]=data.classname;
                            }
                        })
                    }
                }
                var classee=[] //所有课程列表
                for(var i=0;i<classes.length;i++){
                    if ($.inArray(classes[i],classee)==-1){
                        classee.push(classes[i])
                    }
                }
                for (var i=0;i<classee.length;i++){
                    let t=i+1;
                    html+="<tr>" +
                        "<td>"+classee[i]+"</td>" +
                        "<td><div class='ui input'><input type='text' name='class"+t+"_s' id='class"+t+"_s'/></div></td>" +
                        "<td><input type='button' class='ui button' name='btn' id='btn"+t+"' value='录入'></td>" +
                        "</tr>";
                }
                $("#tbody").html(html);
                // 获取button列表
                const button=document.getElementsByName("btn")
                console.log(button)
                let list={};
                //获取课程id
                var classee = [] //所有课程列表
                $.post({
                    url: "/queryclass",
                    data: {num: num},
                    success: function (user) {
                        var classes = []
                        for (var i = 0; i < user.length; i++) {
                            classes.push(user[i].class1)
                            classes.push(user[i].class2)
                            classes.push(user[i].class3)
                            classes.push(user[i].class4)
                        }
                        for (var i = 0; i < classes.length; i++) {
                            if ($.inArray(classes[i], classee) == -1) {
                                classee.push(classes[i])
                            }
                        }
                    }
                })
                for (let i=0;i<button.length;i++) {
                    console.log("ok")
                    let t = i + 1;
                    let varName = 'btn_' + t;  //动态定义变量名
                    list[varName] = $("#btn" + t)
                    list[varName].click(function () {
                        console.log("okk")
                        if ($("#class"+t+"_s").val() != ""){
                            $.post({
                                url: "inputdata",
                                data: {
                                    score: $("#class"+t+"_s").val(),
                                    num:num,
                                    c_id:classee[i] //课程id
                                },
                                success: function () {
                                    alert("录入成功")
                                }
                            })
                        } else {
                            alert("请输入成绩")
                        }
                    })
                }
            }
        })
        $("#t1").show()
    })

})
