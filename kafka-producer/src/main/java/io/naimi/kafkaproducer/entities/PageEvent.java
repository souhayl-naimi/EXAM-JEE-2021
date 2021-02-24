package io.naimi.kafkaproducer.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class PageEvent {
    private String name;
    private LocalDate date;
    private int duration;
}
