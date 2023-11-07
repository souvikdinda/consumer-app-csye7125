import consumer from './consumers/kafkaconsumer.js';
import message from './models/messageModel';

const run = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: process.env.KAFKA_TOPIC });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const messageContent = message.value.toString();
        const messageData = JSON.parse(messageContent);
        const { uri, status } = messageData; 

        try {
         
          const existingMessage = await message.findOne({ where: { uri } })
          if (existingMessage) {
            await existingMessage.update({ status });
            console.log('Status updated for existing URI:', uri, 'New status:', status);
          } else {
            await message.create({ uri, status, content: messageContent });
            console.log('New message created with URI:', uri, 'and status:', status);
          }
        } catch (error) {
          console.error('Error processing message:', error);
        }
      },
    });
  } catch (error) {
    console.error('Error connecting to Kafka or PostgreSQL:', error);
  }
};

run().catch(console.error);
