import {Connect} from "./db/mongo"
import {foods,bookList, goodBookList} from "./db/foods";
import {SmallCategory} from "./db/category";

export const RootApi = (req:any,resp:any)=>{
  resp.send("首页")
}
export const GetList=(req:any,resp:any)=>{
  resp.send([
      {n:1},
      {n:2},
      {n:3}
  ]
  )}
export const GetIf = (req:any,resp:any)=>{
  if(req.query.a){
    resp.send("你确实传参了")
  }else{
    resp.send("没传！")
  }
}
export const PingDb = async (req:any,resp:any)=>{
    try {
      const client = await Connect();
      const db = client.db("test")
      const res = await db.command({ping:1})
      if(res.ok === 1){
        resp.send("mongo connect success")
      }else{
        resp.send("mongo connect failed ")
      }
    
    } catch (e) {
      console.log(e)
      resp.send("数据库连接失败")
    }
}
export const MockApi = (req:any,resp:any)=>{
  (req:any,resp:any)=>{
    console.log("query=>",req.query)
    console.log("params=>",req.params)
    console.log("body=>",req.body)
    console.log("body msg=>",req.body.msg)
    console.log("this is post api")
    // resp.send("this is post api")
    resp.json(
      [
      {id:1,menue:"首页"},
      {id:2,menue:"商品列表"},
      {id:3,menue:"个人设置"}
    ]
    )
    resp.status(500).send("失败了")//模拟失败
  }
}
export const MockRole  = (req:any,resp:any)=>{
  switch(req.body.id){
    case 1:
      resp.json({
        msg:"首页的权限"
      })
      break;
    case 2:
      resp.json({
        msg:"商品的权限"
      })
      break;
    case 3:
      resp.json({
        msg:"个人的权限"
      })
      break;
    default :
      resp.json({
        msg:"没有匹配到"
      })
      break;
  }
}
export const Search = (req:any,resp:any) => {
  const params = req.body;
  console.log("获取的参数:",params)
  console.log("foods原始数据",SmallCategory)
  
  const foods_filter = SmallCategory.filter(item=>{
    if(item.title.indexOf(params.content)>=0){
      return true
    }else{
      return false
    }
  })
  resp.json(foods_filter)
}
export const SearchDb =  async (req:any,resp:any) => {
  const params = req.body;
  console.log("获取的参数:",params)
  console.log("foods原始数据",SmallCategory)
  console.log("search for db")
  const client = await Connect();
  const db = client.db("test");
  try {
      // db.foods.find({name:{$regex:'3'}})
      const result = await db.collection("SmallCategory").find({title:{$regex:`${params.content}`}}).toArray()
      resp.json(result)
  } catch (e) {
      resp.json(e)
  } finally {
      client.close()
  }
}
export const BookList = function(req:any,resp:any){
  const limit = req.body.limit
  resp.json(bookList.slice(0,limit))
}
export const GoodBookList=function(req:any,resp:any){
  // const limit = req.body
  resp.json(goodBookList)
}
