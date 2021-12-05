package com.happ.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Teacher {
    private int num;
    private String username;
    private String password;
    private String sex;
    private int age;
    private String addr;
    private String edu;
    private int class1_id;
    private int class2_id;
    private String title;

    public Teacher(int num, String username, String password) {
        this.num = num;
        this.username = username;
        this.password = password;
    }
}
