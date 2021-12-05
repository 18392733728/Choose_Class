package com.happ.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private int id;
    private String username;
    private String password;
    private String phone;
    private int num;
    private String title;


    public User(String username, String password, String phone,int num,String title) {
        this.username = username;
        this.password = password;
        this.phone=phone;
        this.num=num;
        this.title=title;
    }
}
