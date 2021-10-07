import { MongoClient } from "mongodb";

//const uri = "mongodb://username:pwd@url:27107/?authSource=dbname"
const uri = "mongodb://localhost:27017";
//https://github.com/mongodb/node-mongodb-native/releases/tag/v3.2.1
const options = {
  //为了更好更优化的使用mongodb建议开启
  useUnifiedTopology:true
}

export const Connect=():Promise<MongoClient>=>{
  return new Promise((resolve,reject)=>{
    //单例 singletion
    MongoClient.connect(uri,options,(err,db)=>{
      if(err){
        reject(err)
      }else{
        resolve(db)
      }
    })
  })
}