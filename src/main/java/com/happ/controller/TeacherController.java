package com.happ.controller;


import com.happ.pojo.Teacher;
import com.happ.pojo.User;
import com.happ.pojo._Class;
import com.happ.service.TeacherServiceImpl;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class TeacherController {
    @Autowired
    private TeacherServiceImpl teacherService;

    @RequestMapping("find_teacher")
    @ResponseBody
    public String find_teacher(@Param("num")String num) {
        return teacherService.find_teacher(num);
    }
    @RequestMapping("login_teacher")
    public String login_teacher(){
        return "Teacher/login_teacher";
    }

    @RequestMapping("queryone_t")
    @ResponseBody
    public Teacher queryone_t(@Param("num")String num) {
        return teacherService.queryone_t(num);
    }
    @RequestMapping("queryone_t_num")
    @ResponseBody
    public Teacher queryone_t_num(@Param("username")String username) {
        return teacherService.queryone_t_num(username);
    }


    @RequestMapping("addclass1_id")
    @ResponseBody
    public boolean addclass1_id(@Param("num")String num,@Param("class1_id")int class1_id) {
        return teacherService.addclass1_id(num,class1_id);
    }
    @RequestMapping("addclass2_id")
    @ResponseBody
    public boolean addclass2_id(@Param("num")String num,@Param("class2_id")int class2_id) {
        return teacherService.addclass2_id(num,class2_id);
    }
//    @RequestMapping("loginData_teacher")
//    public String loginData_teacher(@Param("num")String num,@Param("password")String password, Model model){
//        String s = teacherService.find_teacher(num);
//        Subject subject = SecurityUtils.getSubject();
//        Session session = subject.getSession();
//        session.setAttribute("teacher_num",num);
//        if (password.equals(s)){
//            return "Teacher/teacher_happy";
//        }else {
//            model.addAttribute("msg","用户名或密码不对");
//            return "Teacher/login_teacher";
//        }
//    }

    @RequestMapping("/loginData_teacher")
    public String loginData(@Param("num")String num, @Param("password")String password, Model model){
        // 获取当前 subject
        Subject subject = SecurityUtils.getSubject();
        ByteSource credentialsSalt=ByteSource.Util.bytes(num);
        SimpleHash md5 = new SimpleHash("MD5", password, credentialsSalt, 1);
        password=md5.toString();
        // 创建 UsernamePasswordToken 令牌
        UsernamePasswordToken token = new UsernamePasswordToken(num,password);
//        token.setRememberMe(true);
        Session session = subject.getSession();
        session.setAttribute("teacher_num",num);
        try{
            // 令牌登录
            subject.login(token);
//            model.addAttribute("login",num);
            // 登录成功返回欢迎页
            return "Teacher/teacher_happy";
        }catch (Exception ice) {
            model.addAttribute("msg","账号或密码不正确");
            return "Teacher/login_teacher";
        }
    }

    @RequestMapping("getsession_teacher")
    @ResponseBody
    public String getsession_teacher(){
        Subject subject = SecurityUtils.getSubject();
        Session session = subject.getSession();
        String num = (String) session.getAttribute("teacher_num");
        return num;
    }

    @RequestMapping("chose_teacher")
    public String input(Model model){
        List<_Class> list = teacherService.queryall();
        model.addAttribute("list", list);
        return "Teacher/chose_teacher";
    }

    @RequestMapping("querys_c_id")
    @ResponseBody
    public List<String> querys_c_id(@Param("c_id") String c_id){
        return teacherService.querys_c_id(c_id);
    }
    @RequestMapping("look_students")
    public String look_students(){
        return "Teacher/look_students";
    }


    @RequestMapping("set_teacher")
    public String set_teacher(){
        return "Teacher/set_teacher";
    }

    @RequestMapping("updatePassword")
    @ResponseBody
    public boolean updatePassword(@Param("num") String num,@Param("password") String password){
        return teacherService.updatePassword(num,password);
    }

}
