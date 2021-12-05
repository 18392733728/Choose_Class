$(function () {
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
    $.post({
        url:"checkHolidays_student",
        async:false,
        data:{
            student_num:num
        },
        success:function (data) {
            var username="";
            var html=""
            for(var i=0;i<data.length;i++){
                $.post({
                    url: "queryone_t",
                    async:false,
                    data: {num: data[i].teacher_num},
                    success: function (teacher) {
                        username = teacher.username;
                    }
                })
                var d1=data[i].start_date.split(`T`)
                var d2=data[i].end_date.split(`T`)
                html+="<tr>" +
                    "<td>"+username+"</td>" +
                    "<td>"+data[i].rea+"</td>" +
                    "<td>"+d1.join().replace(","," ")+"</td>" +
                    "<td>"+d2.join().replace(","," ")+"</td>" +
                    "<td>"+(data[i].keyss=="false"?"未批准":"已批准")+"</td>" +
                    "</tr>"
            }
            $("#tbody").html(html)
        }
    })
})