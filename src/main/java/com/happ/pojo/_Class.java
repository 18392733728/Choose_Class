package com.happ.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class _Class {
    private int id;
    private String classname;
    private int teacher;

    public _Class(String classname) {
        this.classname = classname;
    }
}
