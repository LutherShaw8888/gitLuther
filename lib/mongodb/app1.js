var MongoClient=require('mongodb').MongoClient;
var mongodbConnect="mongodb://localhost:27017";
var insertData=function (db,callback) {
    var db=db.db("mldn");
    var collection=db.collection("dept")
    var data=[{ "_id": 111, "name": "阿豪", "age": 30 }, { "_id": 222, "name": "小光", "age": 40 }];
    collection.insert(data, function (err,result) {
        if(err){
            console.log(err);
            return
        }
        callback(result);
    })
}

MongoClient.connect(mongodbConnect,function (err,db) {
    if(err){
        console.log("Mongodb链接不成功"+err);
        return
    }
    insertData(db,function (result) {
        console.log(result);
        db.close();
    })
})