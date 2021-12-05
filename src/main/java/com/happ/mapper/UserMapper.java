package com.happ.mapper;


import com.happ.pojo.Score;
import com.happ.pojo.User;
import com.happ.pojo._Class;
import com.happ.pojo.classdata;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

// Mapper注解: 不用再写接口的实现类
@Mapper
@Repository
public interface UserMapper {
    //根据用户名查询
    User queryone(@Param("num") String num);
    User queryone_name_num(@Param("username")String username);

    String cha_student(@Param("num") String num);

    List<User> queryclass(@Param("num") String num);
    classdata queryclass_day(@Param("num") int num, @Param("day")int day);

    List queryclass_num(@Param("num")int num);

    Score querys_num(@Param("num") int num, @Param("c_id")int c_id);

    _Class queryone2(@Param("id") int id);

    boolean update_classed(int class1, int class2, int class3, int class4, int num,int days);

    //ADD
    boolean addUser(User user);

    //加入课
    boolean addClass(int class1, int class2, int class3, int class4, String num,String days);

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
