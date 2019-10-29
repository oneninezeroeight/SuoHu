const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'SouHuNews';

// Use connect method to connect to the server
const connect = () => {
    return new Promise((resolve, reject) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
            assert.equal(null, err);
            err ? reject(err) : resolve(client)
            // console.log("Connected successfully to server");
        });
    })
}

const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();
        // 选中需要连接的库
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(col);
        // Find some documents
        collection.find(query ? query : {}).toArray(function (err, docs) {
            // assert.equal(err, null);
            // console.log("Found the following records");
            // console.log(docs)
            err ? reject(err) : resolve(docs)
        });
        // 关闭连接
        client.close();
    })
}
module.exports = {
    find,
}