const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['192.168.1.15:9092', '192.168.1.15:9093'],
})



const myConsumer = async () => {
    const consumer = kafka.consumer({ groupId: 'test-group' })
    
    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
    
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        })
      },
    })
    }
    
    myConsumer()