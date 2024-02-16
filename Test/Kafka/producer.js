const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['192.168.1.15:9092', '192.168.1.15:9093'],
})


const myProducer = async () => {
const producer = kafka.producer()

await producer.connect()
await producer.send({
  topic: 'test-topic',
  messages: [
    { value: 'Hello Juniarto!' },
  ],
})



await producer.disconnect()
}

myProducer()


