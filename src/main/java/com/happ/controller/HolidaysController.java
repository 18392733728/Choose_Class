package com.happ.controller;

import com.happ.mapper.HolidaysMapper;
import com.happ.pojo.Holidays;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class HolidaysController {
    @Autowired
    private HolidaysMapper holidaysMapper;

    @RequestMapping("/addHoliday")
    @ResponseBody
    public boolean addHoliday(@Param("student_num")String student_num, @Param("teacher_num")String teacher_num, @Param("rea")String rea,
                              @Param("keyss")String keyss,@Param("start_date")String start_date,@Param("end_date")String end_date){
        return holidaysMapper.addHoliday(student_num,teacher_num,rea,keyss,start_date,end_date);
    }

    @RequestMapping("/updateHoliday")
    @ResponseBody
    public boolean updateHoliday(@Param("id")String id){
        return holidaysMapper.updateHoliday(id);
    }

    @RequestMapping("/checkHolidays_student")
    @ResponseBody
    public List<Holidays> checkHolidays_student(@Param("student_num")String student_num){
        return holidaysMapper.checkHolidays_student(student_num);
    }

    @RequestMapping("/checkHolidays_teacher")
    @ResponseBody
    public List<Holidays> checkHolidays_teacher(@Param("teacher_num")String teacher_num){
        return holidaysMapper.checkHolidays_teacher(teacher_num);
    }

    @RequestMapping("holidays_teacher")
    public String holidays_teacher(){
        return "Teacher/holidays_teacher";
    }

    @RequestMapping("holidays_student")
    public String holidays_student(){
        return "Students/holidays_student";
    }


    @RequestMapping("holidays_ed")
    public String holidays_ed(){
        return "Students/holidays_ed";
    }


}
