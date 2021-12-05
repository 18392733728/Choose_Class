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
    //先获取这个老师代了哪两门课？
    $.post({
        url:"queryone_t",
        data:{
            num:num
        },
        success:function (data) {
            var c1=data.class1_id;
            var c2=data.class2_id;
            var c1_name=""
            var c2_name="";
            var c1_s="";
            var c2_s="";
            var c1_jgl=0;
            var c2_jgl=0;
            var c1_avers=0;
            var c2_avers=0;
            $.post({
                url:"queryone2",
                async:false,
                data:{
                    id:c1
                },
                success:function (data) {
                    c1_name=data.classname;
                }
            })
            $.post({
                url:"queryone2",
                async:false,
                data:{
                    id:c2
                },
                success:function (data) {
                    c2_name=data.classname;
                }
            })
            $.post({
                url:"query_c_id",
                async:false,
                data:{
                    c_id:c1
                },
                success:function (data) {
                    c1_s=data.length
                    var s_good=[];
                    var s_bad=[];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].score>=60){
                            s_good.push(data[i])
                        }else {
                            s_bad.push(data[i])
                        }
                        c1_avers+=data[i].score
                    }
                    c1_jgl=Number(s_good.length/(s_good.length+s_bad.length)*100).toFixed(2);
                    c1_avers=c1_avers/data.length.toFixed(2);
                }
            })
            $.post({
                url:"query_c_id",
                async:false,
                data:{
                    c_id:c2
                },
                success:function (data) {
                    c2_s=data.length
                    var s_good=[];
                    var s_bad=[];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].score>=60){
                            s_good.push(data[i])
                        }else {
                            s_bad.push(data[i])
                        }
                        c2_avers+=data[i].score
                    }
                    c2_jgl=Number(s_good.length/(s_good.length+s_bad.length)*100).toFixed(2);
                    c2_avers=c2_avers/data.length;
                }
            })
            // 未代课时c1,c2为 0
            var html="<tr style='height: 53px'>" +
                "<th>已代的课</th>" +
                "<th>人数</th>" +
                "<th>及格率</th>" +
                "<th>平均分</th>" +
                "<th>平均绩点</th>" +
                "<th></th>" +
                "</tr>";
            html+="<tr>" +
                "<td>"+(c1!='0'?c1_name:"未代课")+"</td>" +
                "<td>"+(c1!='0'?c1_s:"")+"</td>" +
                "<td>"+(c1!='0'?c1_s==0?"":c1_jgl+"%":"")+"</td>"+
                "<td>"+(c1!='0'?c1_s==0?"":(c1_avers).toFixed(2):"")+"</td>"+
                "<td>"+(c1!='0'?c1_s==0?"":(c1_avers/20).toFixed(3):"")+"</td>"+
                "<td>"+(c1!='0'?"<button class='ui button' id="+c1+" onclick=dosome(this)>退课</button>":"")+"</td>"+
                "</tr>";
            html+="<tr>" +
                "<td>"+(c2!='0'?c2_name:"未代课")+"</td>" +
                "<td>"+(c2!='0'?c2_s:"")+"</td>" +
                "<td>"+(c2!='0'?c2_s==0?"":c2_jgl+"%":"")+"</td>"+
                "<td>"+(c2!='0'?c2_s==0?"":(c2_avers).toFixed(2):"")+"</td>"+
                "<td>"+(c2!='0'?c2_s==0?"":(c2_avers/20).toFixed(3):"")+"</td>"+
                "<td>"+(c2!='0'?"<button class='ui button' id="+c2+" onclick=dosome(this)>退课</button>":"")+"</td>"+
                "</tr>";
            $("#show").html(html);
            dosome=function (obj){
                //先查num的class1_id和class2_id
                if (obj.id==c1){
                    $.post({
                        url:"addclass1_id",
                        data:{
                            num:num,
                            class1_id:0
                        },
                        success:function (data) {
                            $.post({
                                url:"class_addteacher",
                                async:false,
                                data:{
                                    teacher:0,
                                    id:c1
                                },
                                success:function () {
                                    alert("退课:"+c1_name+" 成功")
                                }
                            })
                        }
                    })
                }else if (obj.id==c2){
                    $.post({
                        url:"addclass2_id",
                        data:{
                            num:num,
                            class2_id:0
                        },
                        success:function (data) {
                            $.post({
                                url:"class_addteacher",
                                async:false,
                                data:{
                                    teacher:0,
                                    id:c2
                                },
                                success:function () {
                                    alert("退课:"+c2_name+" 成功")
                                }
                            })
                        }
                    })
                }

            }
        }

    })

})