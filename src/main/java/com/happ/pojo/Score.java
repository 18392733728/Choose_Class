package com.happ.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Score {
    private int id;
    private int num;
    private int c_id;
    private Double score;

    public Score(int num, int c_id) {
        this.num = num;
        this.c_id = c_id;
    }
}
