package com.happ.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class classdata {
    private int id;
    private int num;
    private int class1;
    private int class2;
    private int class3;
    private int class4;
    private int days;

    public classdata(int num, int class1, int class2, int class3, int class4, int days) {
        this.num = num;
        this.class1 = class1;
        this.class2 = class2;
        this.class3 = class3;
        this.class4 = class4;
        this.days = days;
    }
}
