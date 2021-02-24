package io.naimi.kafkaproducer.Controller;

import io.naimi.kafkaproducer.entities.PageEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Random;

@RestController
public class MyRest {

    @Autowired
    private KafkaTemplate<String, PageEvent> kafkaTemplate;

    @GetMapping("/send/{name}/{topic}")
    public String send(@PathVariable String name, @PathVariable String topic){
        PageEvent pageEvent = new PageEvent(name, LocalDate.now(),new Random().nextInt(1000));
        kafkaTemplate.send(topic,""+pageEvent.getName(),pageEvent);
        return "Message Sent ..."+pageEvent.toString();
    }
}
