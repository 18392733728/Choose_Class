package com.happ.service;

import com.happ.mapper._ClassMapper;
import com.happ.pojo.Score;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class _ClassServiceImpl implements _ClassService{


    @Autowired
    private _ClassMapper _classService;

    @Override
    public boolean class_addteacher(@Param("id") String id, @Param("teacher") String teacher) {
        return _classService.class_addteacher(id,teacher);
    }

    // 根据c_id 查选这门课的人数
    @Override
    public List<Score> query_c_id(@Param("c_id") String c_id){
        return _classService.query_c_id(c_id);
    };
}
