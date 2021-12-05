package com.happ.config;

import com.happ.pojo.Teacher;
import com.happ.service.TeacherService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

public class TeacherRealm extends AuthorizingRealm {
    //授权
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
//        Subject subject = SecurityUtils.getSubject();
//        Admin principal = (Admin) subject.getPrincipal();
//        String perm = principal.getPerm();
//        info.addRole(perm);
//        System.out.println(perm);
        return info;
    }
    @Autowired
    private TeacherService teacherService;
    //认证
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        UsernamePasswordToken token1=(UsernamePasswordToken)token;
        String num=token1.getUsername();
        Teacher teacher = teacherService.queryone_t(num);
        if(teacher == null){
            return null;
        }
//        Subject subject = SecurityUtils.getSubject();
//        Session session = subject.getSession();
//        session.setAttribute("loginUser",user);
        //密码认证 shiro自动做
        return new SimpleAuthenticationInfo(teacher,teacher.getPassword(),"");
    }
}
