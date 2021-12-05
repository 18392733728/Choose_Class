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
    var teacher_num=""
    $("#btn_s").click(function () {
        // //获取老师num
        $.post({
            url:"queryone_t_num",
            async:false,
            data:{
                username:$("#teacher_name").val()
            },
            success:function (data) {
                if (data.username!=null){
                    $.post({
                        url:"addHoliday",
                        async:false,
                        data:{
                            student_num:num,
                            teacher_num:data.num,
                            rea:$("#reason").val(),
                            keyss:"false",
                            start_date:$("#start").val(),
                            end_date:$("#end").val()
                        },
                        success:function () {
                            alert("请假成功，待老师批准")
                        },
                        error:function () {
                            alert("失败，请联系管理员")
                        }
                    })
                }else{
                    alert("失败，请检查教师名是否正确")
                }

            }
        })

    })

})