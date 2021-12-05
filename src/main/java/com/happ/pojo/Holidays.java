package com.happ.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Holidays {
    private int id;
    private int student_num;
    private int teacher_num;
    private String rea;
    private String keyss;
    private String start_date;
    private String end_date;
}
