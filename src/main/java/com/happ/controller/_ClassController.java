package com.happ.controller;

import com.happ.pojo.Score;
import com.happ.service._ClassServiceImpl;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class _ClassController {

    @Autowired
    private _ClassServiceImpl _classServiceImpl;

    @RequestMapping("class_addteacher")
    @ResponseBody
    public boolean class_addteacher(@Param("id") String id, @Param("teacher") String teacher){
        return _classServiceImpl.class_addteacher(id,teacher);
    }

    @RequestMapping("query_c_id")
    @ResponseBody
    public List<Score> query_c_id(@Param("id") String c_id){
        return _classServiceImpl.query_c_id(c_id);
    }
}
