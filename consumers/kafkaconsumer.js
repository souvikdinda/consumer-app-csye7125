import kafka from '../config/kafkaconfig.js';

const consumer = kafka.consumer({ groupId: 'consumer-group' });

export default consumer;
