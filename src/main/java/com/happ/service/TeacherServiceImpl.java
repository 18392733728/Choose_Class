package com.happ.service;


import com.happ.mapper.TeacherMapper;
import com.happ.pojo.Teacher;
import com.happ.pojo._Class;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService{
    @Autowired
    private TeacherMapper teacherMapper;

    @Override
    public String find_teacher(@Param("num")String num){
        return teacherMapper.find_teacher(num);
    }
    @Override
    public Teacher queryone_t_num(@Param("username") String username){
        return teacherMapper.queryone_t_num(username);
    };

    @Override
    public Teacher queryone_t(@Param("num")String num) {
        return teacherMapper.queryone_t(num);
    }

    @Override
    public boolean addclass1_id(@Param("num")String num,@Param("class1_id")int class1_id) {
        return teacherMapper.addclass1_id(num,class1_id);
    }

    @Override
    public boolean addclass2_id(@Param("num")String num,@Param("class2_id")int class2_id) {
        return teacherMapper.addclass2_id(num,class2_id);
    }
    @Override
    public List<_Class> queryall(){
        return teacherMapper.queryall();
    };

    // 根据c_id查选这门课学生的学号
    @Override
    public List<String> querys_c_id(@Param("c_id") String c_id){
        return teacherMapper.querys_c_id(c_id);
    }
    @Override
    public boolean updatePassword(@Param("num") String num,@Param("password") String password){
        return teacherMapper.updatePassword(num,password);
    };
}
