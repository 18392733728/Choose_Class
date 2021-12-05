package com.happ.service;

import com.happ.pojo.Holidays;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface HolidaysService {
    // 添加 未批准的假(学生请假) key默认为false
    boolean addHoliday(@Param("student_num")String student_num, @Param("teacher_num")String teacher_num, @Param("rea")String rea,@Param("keyss")String keyss,@Param("start_date")String start_date,@Param("end_date")String end_date);
    // 老师批假
    boolean updateHoliday(@Param("id")String id);
    // 学生查 通过student_num
    List<Holidays> checkHolidays_student(@Param("student_num")String student_num);
    // 老师查 通过teacher_num
    List<Holidays> checkHolidays_teacher(@Param("teacher_num")String teacher_num);
}
