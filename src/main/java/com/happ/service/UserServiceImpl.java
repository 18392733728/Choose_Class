package com.happ.service;


import com.happ.mapper.UserMapper;
import com.happ.pojo.Score;
import com.happ.pojo.User;
import com.happ.pojo._Class;
import com.happ.pojo.classdata;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserMapper userMapper;
    // 修改密码
    @Override
    public String cha_student(@Param("num") String num){
        return userMapper.cha_student(num);
    };
    @Override
    public User queryone(@Param("num") String num) {
        return userMapper.queryone(num);
    }
    @Override
    public classdata queryclass_day(@Param("num") int num, @Param("day")int day){
        return userMapper.queryclass_day(num,day);
    }
    @Override
    public Score querys_num(@Param("num") int num, @Param("c_id")int c_id){
        return userMapper.querys_num(num,c_id);
    }
    @Override
    public List queryclass_num(@Param("num")int num){
        return userMapper.queryclass_num(num);
    }
    @Override
    public User queryone_name_num(@Param("username")String username){
        return userMapper.queryone_name_num(username);
    }
    @Override
    public _Class queryone2(@Param("id") int id){
        return userMapper.queryone2(id);
    }
    @Override
    public List<User> queryclass(@Param("num") String num){
        return userMapper.queryclass(num);
    }

    @Override
    public boolean changePassword(@Param("username") String num, @Param("newPassword") String newPassword) {
        return userMapper.changePassword(num, newPassword);
    }

    @Override
    public boolean addUser(User user) {
        return userMapper.addUser(user);
    }

    @Override
    public boolean addClass(@Param("class1")int class1,@Param("class2")int class2,@Param("class3")int class3,@Param("class4")int class4,
                            @Param("num")String num,@Param("days")String days) {
        return userMapper.addClass(class1, class2, class3, class4, num, days);
    }
    @Override
    public boolean update_classed(@Param("class1")int class1,@Param("class2")int class2,@Param("class3")int class3,@Param("class4")int class4,
                            @Param("num")int num,@Param("days")int days) {
        return userMapper.update_classed(class1, class2, class3, class4, num, days);
    }

    @Override
    public boolean addClass_to_s(@Param("num") int num,@Param("c_id") int c_id){
        return userMapper.addClass_to_s(num,c_id);
    }
    @Override
    public boolean delClass_to_s(@Param("num") int num,@Param("c_id") int c_id){
        return userMapper.delClass_to_s(num,c_id);
    }

    @Override
    public boolean inputscore(double score, int num,int c_id){
        return userMapper.inputscore(score, num, c_id);
    }

    //查所有人信息
    @Override
    public List<User> queryall(){
        return userMapper.queryall();
    }


}
