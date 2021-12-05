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

})

