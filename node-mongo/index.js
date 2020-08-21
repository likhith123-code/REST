const MongoClient=require('mongodb').MongoClient; // connecting to mongoclient
const assert=require('assert');
const oper=require('./operations');

const url='mongodb://localhost:27017/'; //mongodb will run in port number 27017 only in the PC
const dbname='dishes'; //database name 

MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');
    const db = client.db(dbname);

    oper.insertDocument(db, { name: "Vadonut", description: "Test"},
        "items")
        .then((result) => {
            console.log("Insert Document:\n", result.ops);

            return oper.findDocuments(db, "items"); //instead of call back => remove that call back and use .then and before it use return
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);

            return oper.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "items");

        })
        .then((result) => {
            console.log("Updated Document:\n", result.result);

            return oper.findDocuments(db, "items");
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);
        })
        .catch((err) => console.log(err));

})
.catch((err) => console.log(err));