import consumer from './consumers/kafkaconsumer.js';
import uptime from './model/messageModel.js';
import sequelize from './model/index.js'

// Bootstrapping DatabaseError
sequelize.sync({alter: false, force: false}).then((data) => {
  console.log("Database connection established")
}).catch((err) => {
  console.error("Couldn't connect to database\n", err)
})

const run = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: process.env.KAFKA_TOPIC });

    await consumer.run({
      eachMessage: async ({ message }) => {
        const messageContent = message.value.toString();
        console.log('Received message from Kafka producer:', messageContent);
        try {
          const messageData = JSON.parse(messageContent)
          const { url, status, processTime } = messageData
          console.log("Message received for url:", url, "status:", status, "processTime:", processTime)

          try {
            await uptime.create({ url, status, processTime });
          } catch (error) {
            console.error('Error processing message:', error);
          }
        } catch(error) {
          console.log(error)
        }
      },
    });
  } catch (error) {
    console.error('Error connecting to Kafka or PostgreSQL:', error);
  }
};

run().catch(console.error);
