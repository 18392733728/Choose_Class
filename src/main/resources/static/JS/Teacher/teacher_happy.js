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
})