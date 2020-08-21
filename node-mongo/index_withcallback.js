const MongoClient=require('mongodb').MongoClient; // connecting to mongoclient
const assert=require('assert');
const oper=require('./operations');

const url='mongodb://localhost:27017/'; //mongodb will run in port number 27017 only in the PC
const dbname='dishes'; //database name 

MongoClient.connect(url,(err,client)=>{
    console.log("Connected Successfully");

    const db=client.db(dbname);  //connecting to data base
    oper.insertDocument(db, { name: "Likhith", description: "btech"},
    "items", (result) => {
        console.log("Insert Document:\n", result.ops);  //for insertion use .ops
 // *** one function should be written in other's call back function
        oper.findDocuments(db, "items", (docs) => {
            console.log("Found Documents:\n", docs);  //for displaying the 'docs' use normal call back name

            oper.updateDocument(db, { name: "Likhith" },
                { description: "Btech 3rd year" }, "items",
                (result) => {
                    console.log("Updated Document:\n", result.result); // for updated docs use .result on call back

                    oper.findDocuments(db, "items", (docs) => {
                        console.log("Found Updated Documents:\n", docs);
                    });
                });
        });
});

   
});