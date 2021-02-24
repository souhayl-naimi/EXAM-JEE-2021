package io.naimi.kafkaproducer;

import io.naimi.kafkaproducer.entities.PageEvent;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {
    @KafkaListener(topics = "test5",groupId = "group-ms")
    public void onMessage(ConsumerRecord<String, String> consumerRecord){
        System.out.println("*******************");
            System.out.println("Key = > "+consumerRecord.key()+" Value = > "+consumerRecord.value().toString()+" Offset => "+consumerRecord.offset());
        System.out.println("*******************");

    }
}
