$(function () {
    // ajax返回session的值
    var num="";
    $.post({
        url: "getsession_teacher",
        async:false,
        data: {},
        success: function (data) {
            num = data;
            $("#h2").text(num)
        }
    })
    var username="";
    $.post({
        url: "queryone_t",
        async:false,
        data: {num: num},
        success: function (teacher) {
            username = teacher.username;
            $("#h3").text(username)
        }
    })
    const _class=document.getElementsByName("class")
    for (var i = 0; i < _class.length; i++) {
        _class[i].id="class_"+(i+1);
    }
    const button=document.getElementsByName("btn")
    for (var i = 0; i < button.length; i++) {
        button[i].id="btn_"+(i+1);
    }
    let list={};
    for (let j=0;j<button.length;j++) {
        let t=j+1;
        let varName = 'btn' + t;  //动态定义变量名
        list[varName] = $("#btn_"+t)
        list[varName].click(function () {
            // 判断此老师是否已经选了两门课
            $.post({
                url:"queryone_t",
                async:false,
                data:{
                    num:num,
                },
                success:function (teacher) {
                    if (teacher.class1_id!='0' && teacher.class2_id!='0'){
                        alert("已选两门课，不能再选了")
                    }else if (teacher.class1_id!='0' && teacher.class2_id=='0'){
                        $.post({
                            url: "addclass2_id",
                            async:false,
                            data: {
                                num:num,
                                class2_id: t  //课程id
                            },
                            success: function () {
                                alert("选课成功")
                                $.post({
                                    url:"class_addteacher",
                                    async:false,
                                    data:{
                                        id:t,
                                        teacher:num
                                    },
                                    success:function () {
                                    }
                                })
                            }
                        })
                    }else{
                        $.post({
                            url: "addclass1_id",
                            async:false,
                            data: {
                                num:num,
                                class1_id: t  //课程id
                            },
                            success: function () {
                                alert("选课成功")
                                $.post({
                                    url:"class_addteacher",
                                    async:false,
                                    data:{
                                        id:t,
                                        teacher:num
                                    },
                                    success:function () {
                                    }
                                })
                            }
                        })
                    }
                }
            })

        })
    }

    const name=document.getElementsByName("name")
    var newnames=[]
    for (var i = 0; i < name.length; i++) {
        newnames[i]=name[i].innerText
        $.post({
            url:"queryone_t",
            async:false,
            data:{
                num:name[i].innerText
            },
            success:function (data) {
                newnames[i]=data.username
            }
        })
        name[i].innerText=(newnames[i]==undefined?"--无老师--":newnames[i])
    }
    console.log(newnames)
})