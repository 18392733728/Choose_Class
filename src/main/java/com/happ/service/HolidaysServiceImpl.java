package com.happ.service;

import com.happ.mapper.HolidaysMapper;
import com.happ.pojo.Holidays;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HolidaysServiceImpl implements HolidaysService{

    @Autowired
    private HolidaysMapper holidaysMapper;

    @Override
    public boolean addHoliday(@Param("student_num") String student_num, @Param("teacher_num")String teacher_num,@Param("rea") String rea,
                              @Param("keyss") String keyss,@Param("start_date")String start_date,@Param("end_date")String end_date) {
        return holidaysMapper.addHoliday(student_num,teacher_num,rea,keyss,start_date,end_date);
    }

    @Override
    public boolean updateHoliday(@Param("id")String id) {
        return holidaysMapper.updateHoliday(id);
    }

    @Override
    public List<Holidays> checkHolidays_student(@Param("student_num")String student_num) {
        return holidaysMapper.checkHolidays_student(student_num);
    }

    @Override
    public List<Holidays> checkHolidays_teacher(@Param("teacher_num")String teacher_num) {
        return holidaysMapper.checkHolidays_teacher(teacher_num);
    }
}
