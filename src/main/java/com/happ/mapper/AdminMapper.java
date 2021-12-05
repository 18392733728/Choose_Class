package com.happ.mapper;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

// Mapper注解: 不用再写接口的实现类
@Mapper
@Repository
public interface AdminMapper {
    // 查密码
    String find(String username);
    // 修改密码
    void changepassword(@Param("username") String username, @Param("newpassword") String newpassword);
}
