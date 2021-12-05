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

    $("#btn_s").click(function () {
        //两个框都有值
        if ($("#password_o").val()!="" && $("#password_n").val()!=""){
            // 将输入值md5加密一层
            var md5=""
            $.post({
                url:"password_md5",
                async:false,
                data:{
                    password:$("#password_o").val(),
                    num:num
                },
                success:function (data) {
                    md5=data;
                }
            })
            // 从数据库中查旧密码
            var oldpassword="";
            $.post({
                url:"find_teacher",
                async:false,
                data:{
                    num:num,
                },
                success:function (data) {
                    oldpassword=data;
                    if (md5==oldpassword){
                        if ($("#password_o").val() != $("#password_n").val()){
                            //修改密码
                            $.post({
                                url:"updatePassword",
                                data:{
                                    num:num,
                                    password: $("#password_n").val()
                                },
                                success:function (data) {
                                    alert(data)
                                }
                            })
                        }else {
                            alert("NewPwd==OldPwd,Please Reenter")
                        }
                    }else {
                        alert("OldPassword Error")
                    }
                }
            })
        }else {
            alert("Please Input All")
        }

    })

})