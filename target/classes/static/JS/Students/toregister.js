window.onload=function () {
    var n=false;
    var p=false;
    var c=false;
    var d=false;
    var num;
    var pass;
    var name;
    var phone;
    var nameE=document.getElementById("username");
    var passE=document.getElementById("password");
    var phonE=document.getElementById("phone");
    var numE=document.getElementById("num");
    numE.onblur = function () {
        num=numE.value.trim();
        if(num.length<4 || num.length>10){
            document.getElementById("numError").innerHTML="<font color='red'>学号不合法</font>";
            d=false;
        }else{
            document.getElementById("numError").innerHTML="<font color='#7fff00'>学号合法</font>";
            d=true;
        }
    }
    nameE.onblur = function () {
        name=nameE.value.trim();
        if(name.length<2 || name.length>10){
            document.getElementById("usernameError").innerHTML="<font color='red'>姓名不合法</font>";
            n=false;
        }else{
            document.getElementById("usernameError").innerHTML="<font color='#7fff00'>姓名合法</font>";
            n=true;
        }
    }
    passE.onblur = function () {

        pass=passE.value.trim();
        var flog=/^\w+$/.test(pass);

        if(!flog){
            document.getElementById("passError").innerHTML="<font color='red'>密码不合法</font>";
            p=false;
        }else{
            document.getElementById("passError").innerHTML="<font color='#7fff00'>密码合法</font>";
            p=true;
        }
    }
    phonE.onblur = function () {
        phone=phonE.value.trim();
        if(phone.length>11 || phone.length<11){
            document.getElementById("phoneError").innerHTML="<font color='red'>手机号不合法</font>";
            c=false;
        }else{
            document.getElementById("phoneError").innerHTML="<font color='#7fff00'>手机号合法</font>";
            c=true;
        }
    }
    nameE.onfocus=function (){
        document.getElementById("usernameError").innerHTML="";
    }
    passE.onfocus=function (){
        document.getElementById("passError").innerHTML="";
    }
    phonE.onfocus=function (){
        document.getElementById("phoneError").innerHTML="";
    }
    numE.onfocus=function (){
        document.getElementById("numError").innerHTML="";
    }
    document.getElementById("subbtn").onclick=function () {
        nameE.focus();//获得焦点
        nameE.blur(); //失去焦点
        passE.focus();
        passE.blur();
        numE.focus();
        numE.blur();

        var base64=""
        var reader = new FileReader();
        var AllowImgFileSize = 2100000; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
        var file = $("#image")[0].files[0];
        if (file) {
            //将文件以Data URL形式读入页面
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                    alert( '上传失败，请上传不大于2M的图片！');
                    return;
                }else{
                    //执行上传操作
                    base64=reader.result;
                    if(n && p && c && d) {
                        $.post({
                            url:"register",
                            async:false,
                            data:{
                                username:name,
                                num:num,
                                password:pass,
                                phone:phone,
                                title:base64
                            },
                            success:function () {
                                alert("注册成功")
                            }
                        })
                    }
                    else {
                        alert("数据有误!")
                    }
                }
            }
        }

    }
}