const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'blog';
const client = new MongoClient(url);

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');
  
    // the following code examples can be pasted here...
  
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());