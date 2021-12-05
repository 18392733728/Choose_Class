$(function () {
// ajax返回session的值
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
    $("#close").click(function () {
        $('.ui.modal')
            .modal('hide')
        ;
    })
    $.post({
        url:"/queryclass",
        async:false,
        data: {"num":num},
        success:function (user) {
            var html="";
            html+="<table class=\"ui celled table\" style='text-align: center'>" +
                "  <thead>" +
                "    <tr>" +
                "      <th></th>" +
                "      <th>第一节课(08:20-10:00)</th>" +
                "      <th>第二节课(10:20-12:00)</th>" +
                "      <th>第三节课(14:00-15:40)</th>" +
                "      <th>第四节课(16:00-17:40)</th>" +
                "    </tr>" +
                "  </thead>" +
                "  <tbody id='tbody'>" +
                "  </tbody>" +
                "</table>";
            $("#checked_class").html(html);
            // 通过学号查到这个人的信息 在选课信息里查
            // user是个列表
            var classess=[]
            // var classess_t=[]
            // classess_t.dim(0)
            var classess_t = new Array().fill("");
            var classess_num=[]
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
            let html2="";
            let t=1;
            dosome=function(obj){
                $.post({
                    url:"queryone_t",
                    data:{
                        num:obj.id
                    },
                    success:function (teacher) {
                        // 填充教师信息
                        if (teacher.num==undefined){
                            var info="此课程暂无教师"
                        }else {
                            var info="教职工号:"+teacher.num+"<br>"+"姓名:"+teacher.username+"<br>"+"年龄:"+teacher.age+"<br>"
                                +"性别:"+teacher.sex+"<br>"+"学历:"+teacher.edu+"<br>"+"住址:"+teacher.addr+"<br>" +
                                    "<div style='position: absolute;left: 526px;top: 65px;' >" +
                                    "<img style='width: 350px;height: 200px;'" +
                                    "src='"+teacher.title+"'/>" +
                                "</div>"
                        }
                        $("#contents").html(info)
                        $('.ui.modal')
                            .modal('show')
                        ;
                    }
                })
            }
            for (var i = 0; i < classess.length; i+=4){
                for (var j=i;j<4+i;j++){
                    if (classess[j]!=undefined){
                        $.post({
                            url:"queryone2",
                            async:false,
                            data:{id:classess[j]},
                            success:function (data) {
                                classess[j]=data.classname;
                                classess_t[j]=data.teacher;
                                if (classess_t[j]>0){
                                    $.post({
                                        url:"queryone_t",
                                        async:false,
                                        data:{
                                            num:classess_t[j]
                                        },
                                        success:function (data) {
                                            classess_t[j]=data.username;
                                            classess_num[j]=data.num;
                                        }
                                    })
                                }
                            }
                        })
                    }else {
                        classess[j]="*未选*"
                    }
                }
                html2+="<tr>" +
                    "<td>"+("星期"+t)+"</td>" +
                    "<td>"+classess[i]+"<br><a id="+ classess_num[i] +" onClick=dosome(this)>"+"教师:"+(classess_t[i]==undefined||classess_t[i]=='0'?"":classess_t[i])+"</a>"+"</td>" +
                    "<td>"+classess[i+1]+"<br><a id="+ classess_num[i+1] +" onClick=dosome(this)>"+"教师:"+(classess_t[i+1]==undefined||classess_t[i+1]=='0'?"":classess_t[i+1])+"</a>"+"</td>" +
                    "<td>"+classess[i+2]+"<br><a id="+ classess_num[i+2] +" onClick=dosome(this)>"+"教师:"+(classess_t[i+2]==undefined||classess_t[i+2]=='0'?"":classess_t[i+2])+"</a>"+"</td>" +
                    "<td>"+classess[i+3]+"<br><a id="+ classess_num[i+3] +" onClick=dosome(this)>"+"教师:"+(classess_t[i+3]==undefined||classess_t[i+3]=='0'?"":classess_t[i+3])+"</a>"+"</td>" +
                    "</tr>";
                t++;
            }
            $("#tbody").html(html2);
        }
    })

})