package com.happ.service;

import com.happ.mapper.AdminMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminMapper adminMapper;

    @Override
    public void changepassword(@Param("username") String username, @Param("newpassword") String newpassword) {
        adminMapper.changepassword(username,newpassword);
    }

    @Override
    public String find(String username) {
        System.out.println("来了");
        String s = adminMapper.find(username);
        return s;
    }
}
