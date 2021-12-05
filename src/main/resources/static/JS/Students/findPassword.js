$(function () {
    $("#find").click(function () {
        if ($("#newPassword").val()==$("#newPassword2").val()){
            $.post({
                url: "queryone",
                data: {num:$("#num").val()},
                success: function (data) {
                    var p=data.phone
                    if (p==$("#phone").val()){
                        $.post({
                            url: "changePassword",
                            data: {num:$("#num").val(),newPassword:$("#newPassword").val()},
                            success: function () {
                                alert("找回成功")
                            }
                        })
                    }else {
                        alert("手机号有误")
                    }
                }
            })
        }else {
            alert("两次输入密码不同")
        }
    })
})