package com.happ.mapper;


import com.happ.pojo.Score;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

// Mapper注解: 不用再写接口的实现类
@Mapper
@Repository
public interface  _ClassMapper {
    // 加老师
    boolean class_addteacher(String id,String teacher);
    // 根据c_id 查选这门课的人数
    List<Score> query_c_id(String c_id);
}
