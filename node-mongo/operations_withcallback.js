exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
      console.log("Inserted sucessfully : inserted document is : ",document);
        callback(result);
    });
};

// call back is called once the doc is inserted | updated | found | deleted sucessfully

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
        callback(docs);        
    });
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err, result) => {
        console.log("Removed the document ", document);
        callback(result);        
    });
};

// 5 params dbname , doc , newdoc , collection name , call back
exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update }, null, (err, result) => { //4 params  : doc updated_condition : null : callback 
        console.log("Updated the document with ", update);
        callback(result);        
    });
};

// for insert, deleteOne , find : contains only 2 params => document and call back
// for updateOne : 4 params => document, updated condition, null and call back