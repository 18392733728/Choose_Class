package com.happ.controller;

import com.google.inject.internal.cglib.core.$ClassNameReader;
import com.happ.mapper.UserMapper;
import com.happ.pojo.Score;
import com.happ.pojo.User;
import com.happ.pojo._Class;
import com.happ.pojo.classdata;
import org.apache.ibatis.annotations.Param;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MyController {


    @RequestMapping({"/","/index"})
    public String index(){
        return "Students/login";
    }

    @RequestMapping("/login")
    public String login(Model model){
        return "Students/login";
    }

    @RequestMapping("/loginData")
    public String loginData(String num, String password, Model model){
        // 获取当前 subject
        Subject subject = SecurityUtils.getSubject();
        ByteSource credentialsSalt=ByteSource.Util.bytes(num);
        SimpleHash md5 = new SimpleHash("MD5", password, credentialsSalt, 1);
        password=md5.toString();
        // 创建 UsernamePasswordToken 令牌
        UsernamePasswordToken token = new UsernamePasswordToken(num,password);
//        token.setRememberMe(true);
        Session session = subject.getSession();
        session.setAttribute("username",num);
        try{
            // 令牌登录
            subject.login(token);
            model.addAttribute("login",num);
            // 登录成功返回欢迎页
            return "Students/happy";
        }catch (Exception ice) {
            model.addAttribute("msg","账号或密码不正确");
            return "Students/login";
        }
    }
    @RequestMapping("getsession")
    @ResponseBody
    public String getsession(){
        Subject subject = SecurityUtils.getSubject();
        Session session = subject.getSession();
        String username = (String) session.getAttribute("username");
        return username;
    }
    @RequestMapping("getsession_ad")
    @ResponseBody
    public String getsession_ad(){
        Subject subject = SecurityUtils.getSubject();
        Session session = subject.getSession();
        String username = (String) session.getAttribute("adminname");
        return username;
    }

    @Autowired
    private UserMapper userMapper;

    @RequestMapping("/toregister")
    public String t(){
        return "Students/toregister";
    }


    @RequestMapping("/register")
    public String toregister(String username, String password, String phone,int num,String title){

        ByteSource credentialsSalt=ByteSource.Util.bytes(String.valueOf(num));
        SimpleHash md5 = new SimpleHash("MD5", password, credentialsSalt, 1);
        password=md5.toString();

        User user = new User(username, password,phone,num,title);
        boolean b = userMapper.addUser(user);
        if (b && user.getUsername().length()!=0){
            return "Students/login";
        }else{
            return "Students/toregister";
        }
    }

    @RequestMapping("/out")
    public String out(){
        System.out.println("注销");
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
        return "Students/login";
    }

    @PostMapping("/up")
    @ResponseBody
    public String up(@Param("class1") int class1,@Param("class2")int class2,@Param("class3")int class3,@Param("class4")int class4,
                     @Param("num") String num,@Param("day") String day){
        boolean b = userMapper.addClass(class1, class2, class3, class4, num, day);
        if (b){
            return "Successfully";
        }else {
            return "Net_Error";
        }

    }

    @PostMapping("queryclass")
    @ResponseBody
    public List<User> queryclass(@Param("num") String num){
        return userMapper.queryclass(num);
    }
    @PostMapping("queryone_name_num")
    @ResponseBody
    public User queryone_name_num(@Param("username") String username){
        return userMapper.queryone_name_num(username);
    }
    @PostMapping("queryclass_day")
    @ResponseBody
    public classdata queryclass_day(@Param("num") int num, @Param("day")int day){
        return userMapper.queryclass_day(num,day);
    }
    @PostMapping("queryclass_num")
    @ResponseBody
    public List queryclass_num(@Param("num") int num){
        return userMapper.queryclass_num(num);
    }

    @PostMapping("querys_num")
    @ResponseBody
    public Score querys_num(@Param("num") int num, @Param("c_id")int c_id){
        return userMapper.querys_num(num,c_id);
    }
    @PostMapping("update_classed")
    @ResponseBody
    public boolean update_classed(@Param("class1")int class1,@Param("class2")int class2,@Param("class3")int class3,@Param("class4")int class4,
                                  @Param("num")int num,@Param("days")int days){
        return userMapper.update_classed(class1,class2,class3,class4,num,days);
    }

    @PostMapping("addClass_to_s")
    @ResponseBody
    public boolean addClass_to_s(@Param("num") int num,@Param("c_id") int c_id){
        return userMapper.addClass_to_s(num,c_id);
    }
    @PostMapping("delClass_to_s")
    @ResponseBody
    public boolean delClass_to_s(@Param("num") int num,@Param("c_id") int c_id){
        return userMapper.delClass_to_s(num,c_id);
    }
    @PostMapping("/queryone2")
    @ResponseBody
    public _Class queryone2(@Param("id") int id){
        return userMapper.queryone2(id);
    }

    @PostMapping("/queryone")
    @ResponseBody
    public User queryone(@Param("num") String num){
        return userMapper.queryone(num);
    }

    @RequestMapping("/findPassword")
    public String findPassword(){
        return "Students/findPassword";
    }

    @RequestMapping("/changePassword")
    public String changePassword(@Param("num") String num, @Param("newPassword") String newPassword){
        ByteSource credentialsSalt=ByteSource.Util.bytes(num);
        SimpleHash md5 = new SimpleHash("MD5", newPassword, credentialsSalt, 1);
        newPassword=md5.toString();
        boolean b = userMapper.changePassword(num, newPassword);
        if (b){
            return "Students/login";
        }else{
            return "";
        }
    }

    @RequestMapping("/changePassword2")
    @ResponseBody
    public String changePassword2(@Param("num") String num, @Param("newPassword") String newPassword){
        ByteSource credentialsSalt=ByteSource.Util.bytes(num);
        SimpleHash md5 = new SimpleHash("MD5", newPassword, credentialsSalt, 1);
        newPassword=md5.toString();
        boolean b = userMapper.changePassword(num, newPassword);
        if (b){
            return "Successfully";
        }else{
            return "Fail";
        }
    }

    @RequestMapping("chose")
    public String chose(){
        return "Students/chose";
    }

    @RequestMapping("kebiao")
    public String kebiao(){
        return "Students/kebiao";
    }

    @RequestMapping("score")
    public String score(){
        return "Students/score";
    }
    @RequestMapping("set_student")
    public String set_student(){
        return "Students/set_student";
    }
    //单纯地查一下密码
    @RequestMapping("cha_student")
    @ResponseBody
    public String cha_student(@Param("num") String num){
        return userMapper.cha_student(num);
    }

    //
    @RequestMapping("password_md5")
    @ResponseBody
    public String password_md5(String password,String num){
        ByteSource credentialsSalt=ByteSource.Util.bytes(num);
        SimpleHash md5 = new SimpleHash("MD5", password, credentialsSalt, 1);
        password=md5.toString();
        return password;
    }

    @RequestMapping("title")
    public String title(){
        return "Students/title";
    }

}
