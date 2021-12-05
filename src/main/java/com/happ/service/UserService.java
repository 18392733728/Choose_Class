package com.happ.service;

import com.happ.pojo.Score;
import com.happ.pojo.User;
import com.happ.pojo._Class;
import com.happ.pojo.classdata;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserService {
    //根据用户名查询密码
    User queryone(@Param("num") String num);
    User queryone_name_num(@Param("username")String username);
    String cha_student(@Param("num") String num);
    List<User> queryclass(@Param("num") String num);
    classdata queryclass_day(@Param("num") int num, @Param("day")int day);

    Score querys_num(@Param("num") int num, @Param("c_id")int c_id);
    List queryclass_num(@Param("num")int num);
    _Class queryone2(@Param("id") int id);

    //ADD
    boolean addUser(User user);

    boolean addClass(int class1, int class2, int class3, int class4, String num,String days);
    boolean update_classed(int class1, int class2, int class3, int class4, int num,int days);

    //不重复课 加到成绩表
    boolean addClass_to_s(int num,int c_id);
    boolean delClass_to_s(int num,int c_id);
    //改密码
    boolean changePassword(String num, String newPassword);

    //查所有人信息
    List<User> queryall();
    //录入分数
    boolean inputscore(double score, int num,int c_id);


}
