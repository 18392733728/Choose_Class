package com.happ.mapper;

import com.happ.pojo.Teacher;
import com.happ.pojo._Class;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

// Mapper注解: 不用再写接口的实现类
@Mapper
@Repository
public interface TeacherMapper {
    // 查密码
    String find_teacher(String num);
    //根据num查teachers表
    Teacher queryone_t(String num);
    Teacher queryone_t_num(String username);
    // 添加class1_id
    boolean addclass1_id(String num,int class1_id);
    // 添加class2_id
    boolean addclass2_id(String num,int class2_id);
    //
    List<_Class> queryall();
    // 根据c_id查选这门课学生的学号
    List<String> querys_c_id(String c_id);
    //修改密码
    boolean updatePassword(String num,String password);
}
