package com.happ.service;

import com.happ.pojo.Score;

import java.util.List;

public interface _ClassService {
    // 加老师
    boolean class_addteacher(String id,String teacher);
    // 根据c_id 查选这门课的人数
    List<Score> query_c_id(String c_id);
}
