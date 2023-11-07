import { Kafka } from 'kafkajs';
import dotenv from 'dotenv';

dotenv.config();

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: [process.env.KAFKA_BROKERS],
});

export default kafka;
