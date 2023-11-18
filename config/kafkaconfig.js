import { Kafka, logLevel } from 'kafkajs';
import dotenv from 'dotenv';

dotenv.config();

const kafka = new Kafka({
  clientId: process.env.KAFKA_TOPIC+'-id',
  brokers: process.env.KAFKA_BROKERS.split(','), 
  logLevel: logLevel.ERROR 
});

export default kafka;

