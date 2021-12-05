$(function () {
    // ajax返回session的值
    var num;
    $.post({
        url: "getsession",
        async:false,
        data: {},
        success: function (data) {
            num = data;
            $("#h2").text(num)
        }
    })
    var username;
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
    var html="";
    html+="<table class=\"ui celled table\" style='text-align: center'>" +
        "  <thead>" +
        "    <tr>" +
        "      <th>科目</th>" +
        "      <th>成绩</th>" +
        "      <th>绩点</th>" +
        "    </tr>" +
        "  </thead>" +
        "  <tbody id='tbody'>" +
        "  </tbody>" +
        "</table>"
    $("#checked_class").html(html);
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
    $("#tbody").html(html2)
})