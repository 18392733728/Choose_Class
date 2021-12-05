package com.happ.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
    private String username;
    private String password;
    private String perm;

    public Admin(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
