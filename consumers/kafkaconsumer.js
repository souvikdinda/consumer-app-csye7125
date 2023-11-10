import kafka from '../config/kafkaconfig.js';

const consumer = kafka.consumer({ groupId: [process.env.KAFKA_GROUPID] });

export default consumer;
