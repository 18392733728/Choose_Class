$(function () {
    // ajax返回session的值
    let username;
    $.post({
        url:"getsession_ad",
        data:{},
        success:function (datas) {
            username=datas
            $("#admin").text("管理员账户:"+datas)
        }
    })
    $("#btn_s").click(function () {
        //两个框都有值
        if ($("#password_o").val()!="" && $("#password_n").val()!=""){
            // 从数据库中查旧密码
            var oldpassword="";
            $.post({
                url:"cha_root",
                data:{
                    username:username,
                },
                success:function (data) {
                    oldpassword=data;
                    if ($("#password_o").val()==oldpassword){
                        if ($("#password_o").val() != $("#password_n").val()){
                            //修改密码
                            $.post({
                                url:"changepassword",
                                data:{
                                    username:username,
                                    newpassword: $("#password_n").val()
                                },
                                success:function () {
                                    alert("修改成功")
                                }
                            })
                        }else {
                            alert("新旧密码相同，请重新输入")
                        }
                    }else {
                        alert("原密码错误")
                    }
                }
            })

        }else {
            alert("请输入完整")
        }

    })
})