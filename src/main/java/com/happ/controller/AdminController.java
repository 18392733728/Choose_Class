package com.happ.controller;

import com.happ.mapper.UserMapper;
import com.happ.pojo.User;
import com.happ.service.AdminServiceImpl;
import org.apache.ibatis.annotations.Param;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class AdminController {
    @Autowired
    private UserMapper userMapper;


    //进入后台管理登录页
    @RequestMapping("/admin")
    public String toadmin(){
        return "Admin/admin_login";
    }
    @Autowired
    private AdminServiceImpl adminMapper;

    //进入后台管理
    @RequestMapping("/toadmin")
    public String admin(String username, String password, Model model){
        String s = adminMapper.find(username);
        Subject subject = SecurityUtils.getSubject();
        Session session = subject.getSession();
        session.setAttribute("adminname",username);
        if (password.equals(s)){
            return "Admin/admin";
        }else {
            model.addAttribute("msg","用户名或密码不对");
            return "Admin/admin_login";
        }
    }
    //单纯地查一下root密码
    @RequestMapping("cha_root")
    @ResponseBody
    public String cha_root(String username){
        String s = adminMapper.find(username);
        return s;
    }
    @RequestMapping("403")
    public String si03(){
        return "error/403";
    }


    @RequestMapping("lookStudents")
    public String lookStudents(Model model){
        List<User> list = userMapper.queryall();
        model.addAttribute("list", list);
        return "Admin/lookStudents";
    }
    @RequestMapping("looksession")
    @ResponseBody()
    public User looksession(String username){
        User user = userMapper.queryone(username);
        return user;
    }
    @RequestMapping("input")
    public String input(Model model){
        List<User> list = userMapper.queryall();
        model.addAttribute("list", list);
        return "Admin/input";
    }
    @RequestMapping("inputdata")
    @ResponseBody
    public boolean inputscore(@Param("score")Double score,@Param("num")int num,@Param("c_id")int c_id){
        return userMapper.inputscore(score,num,c_id);
    }

    @RequestMapping("set")
    public String set(){
        return "Admin/set";
    }
    @RequestMapping("changepassword")
    public String changepassword(String username, String newpassword){
        adminMapper.changepassword(username, newpassword);
        return "Admin/set";
    }

    @RequestMapping("tubiao")
    public String tubiao(Model model){
        List<User> list = userMapper.queryall();
        model.addAttribute("list", list);
        return "Admin/tubiao";
    }

}
