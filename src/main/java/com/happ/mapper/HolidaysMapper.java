package com.happ.mapper;

import com.happ.pojo.Holidays;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
// Mapper注解: 不用再写接口的实现类
@Mapper
@Repository
public interface HolidaysMapper {
    // 添加 未批准的假(学生请假) key默认为false
    boolean addHoliday(@Param("student_num")String student_num,@Param("teacher_num")String teacher_num,@Param("rea")String rea,
                       @Param("keyss")String keyss,@Param("start_date")String start_date,@Param("end_date")String end_date);
    // 老师批假
    boolean updateHoliday(@Param("id")String id);
    // 学生查 通过student_num
    List<Holidays> checkHolidays_student(@Param("student_num")String student_num);
    // 老师查 通过teacher_num
    List<Holidays> checkHolidays_teacher(@Param("teacher_num")String teacher_num);
}
