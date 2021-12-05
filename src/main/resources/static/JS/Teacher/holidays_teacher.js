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
    $.post({
        url:"checkHolidays_teacher",
        async:false,
        data:{
            teacher_num:num
        },
        success:function (data) {
            var len=data.length
            var html=""
            for(var i=0;i<len;i++){
                var sname="";
                $.post({
                    url:"queryone",
                    async:false,
                    data:{
                        num:data[i].student_num
                    },
                    success:function (data) {
                        sname=data.username
                    }
                })

                var d1=data[i].start_date.split(`T`)
                var d2=data[i].end_date.split(`T`)
                var false_btn="<button class='ui button' name='btn' onclick=dosome(this) id='"+data[i].id+"'>同意</button>"
                var true_btn="已同意"
                html+="<tr>" +
                    "<td>"+sname+"</td>" +
                    "<td>"+username+"</td>" +
                    "<td>"+data[i].rea+"</td>" +
                    "<td>"+d1.join().replace(","," ")+"</td>" +
                    "<td>"+d2.join().replace(","," ")+"</td>" +
                    "<td>"+(data[i].keyss=='false'?false_btn:true_btn)+"</td>" +
                    "<td hidden>"+data[i].id+"</td>" +
                    "</tr>"
                dosome=function (obj){
                    var id=obj.id
                    $.post({
                        url:"updateHoliday",
                        async:false,
                        data:{
                            id:id
                        },
                        success:function () {
                            alert("已同意")
                        }
                    })
                }
            }
            $("#tbody").html(html)
        }
    })
})