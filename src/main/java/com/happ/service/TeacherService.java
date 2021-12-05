package com.happ.service;

import com.happ.pojo.Teacher;
import com.happ.pojo._Class;

import java.util.List;

public interface TeacherService {
    // 查密码
    String find_teacher(String num);
    Teacher queryone_t_num(String username);
    //根据num查teachers表
    Teacher queryone_t(String num);
    // 添加class1_id
    boolean addclass1_id(String num,int class1_id);
    // 添加class2_id
    boolean addclass2_id(String num,int class2_id);
    //
    List<_Class> queryall();
    // 根据c_id查选这门课学生的学号
    List<String> querys_c_id(String c_id);

    boolean updatePassword(String num,String password);
}
