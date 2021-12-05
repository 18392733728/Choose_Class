$.ajaxSettings.async = false;
$(function () {
    $("#bt").click(function () {
        var num="";
        $.post({
            url:"/queryone_name_num",
            data:{"username":$("#select").val()},
            success:function (data) {
                num=data.num;
            }
        })
        var score=[] //成绩
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
                var classee_name=[] //所有课程列表 name
                for(var i=0;i<classes.length;i++){
                    if ($.inArray(classes[i],classee_name)==-1){
                        classee_name.push(classes[i])
                    }
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
                    }
                })
                $('#myChart1').remove(); // 删除之前的图  创建新图 避免重叠
                $('#tu1').append('<canvas id="myChart1" width="700" height="700"></canvas>');
                $('#myChart2').remove(); // 删除之前的图  创建新图 避免重叠
                $('#tu2').append('<canvas id="myChart2" width="700" height="700" style="margin-left: 100px;"></canvas>');
                var ctx1 = document.getElementById("myChart1").getContext("2d");
                var data = {
                    labels: classee_name,
                    datasets: [
                        {
                            label: "My First dataset",
                            fillColor: "rgb(95,95,95,0.7)",
                            strokeColor: "rgba(95,94,94,0.8)",
                            highlightFill: "rgba(90,90,90,0.75)",
                            highlightStroke: "rgb(87,87,87)",
                            data: score
                        }
                    ]
                };
                new Chart(ctx1).Bar(data);
                var ctx2 = document.getElementById("myChart2").getContext("2d");
                new Chart(ctx2).Radar(data);
            }
        })
    })
});