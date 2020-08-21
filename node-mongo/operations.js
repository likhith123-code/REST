exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.insert(document);
};

// call back is called once the doc is inserted | updated | found | deleted sucessfully

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document);
};

// 5 params dbname , doc , newdoc , collection name , call back
exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    return coll.updateOne(document, { $set: update }, null);
};
