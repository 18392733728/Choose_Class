package com.happ.config;

import at.pollux.thymeleaf.shiro.dialect.ShiroDialect;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.*;


@Configuration
public class ShiroConfig {

    // 过滤器工厂
    @Bean
    public ShiroFilterFactoryBean getShiroFilterFactoryBean(@Qualifier("securityManager") DefaultWebSecurityManager SecurityManager){
        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
        shiroFilterFactoryBean.setSecurityManager(SecurityManager);
        // 添加 shiro 内置过滤器
        // anon 无需认证就能访问
        // authc 需认证(登录)才能访问
        // user 必须有 记住我 才能访问
        // perms 拥有对某个资源的权限才能访问
        // roles 拥有某个角色的权限才能访问
        Map<String, String> stringMap = new HashMap<>();
        stringMap.put("/","anon");
        stringMap.put("/index","anon");
//        stringMap.put("/toadmin","roles[admin]");
        shiroFilterFactoryBean.setFilterChainDefinitionMap(stringMap);

        // 自动跳转到
        shiroFilterFactoryBean.setLoginUrl("403");
        //  无权限 跳转到此
//        shiroFilterFactoryBean.setUnauthorizedUrl("403");

        return shiroFilterFactoryBean;
    }



    // 安全管理器  （2）
    @Bean(name = "securityManager")
    public DefaultWebSecurityManager getSecurityManager(@Qualifier("myRealm") MyRealm myRealm,@Qualifier("teacherRealm") TeacherRealm teacherRealm){
        DefaultWebSecurityManager SecurityManager = new DefaultWebSecurityManager();
        List<Realm> realms=new ArrayList<>();
        realms.add(myRealm);
        realms.add(teacherRealm);
        SecurityManager.setRealms(realms);
        return SecurityManager;
    }


    // 创建 realm 对象 需要自定义     （1）
    @Bean(name = "myRealm")
    public MyRealm MyRealm(){
        MyRealm myRealm = new MyRealm();
        return myRealm;
    }
    @Bean(name = "teacherRealm")
    public TeacherRealm TeacherRealm(){
        TeacherRealm teacherRealm = new TeacherRealm();
        return teacherRealm;
    }

    @Bean
    public ShiroDialect shiroDialect(){
        return new ShiroDialect();
    }

}
