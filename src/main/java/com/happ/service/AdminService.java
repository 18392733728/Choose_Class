package com.happ.service;

public interface AdminService {
    // 查密码
    String find(String username);
    // 修改密码
    void changepassword(String username, String newpassword);
}