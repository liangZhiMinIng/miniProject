import { bookList, goodBookList, lowPrice } from "./db/foods";
import {BigCategory,SmallCategory} from "./db/category";
import {Connect} from "./db/mongo";

export const BookList=(parent:any,args:any)=>{
  console.log(parent)
  console.log(args)
  return bookList.slice(0,args.limit)
}
export const BookListDb = async (parent:any,args:any) => {
  try {
      const client = await Connect();
      try {
          console.log("this is db query")
          const db = client.db("test");
          const result = await db.collection("bookList").find().limit(args.limit).toArray()
          return result
      } catch (e) {
          return e
      } finally {
          client.close();
      }
  } catch (error) {
      return error
  }
}

export const GoodBookList = (parent:any,args:any)=>{
    return goodBookList 
}
export const GoodBookListDb = async (parent:any,args:any)=>{
  try {
    const client = await Connect();
    try {
      console.log("this is db query")
      const db = client.db("test")
      const result = args.id ? await db.collection("goodBookList").find({id:args.id}).toArray() : await db.collection("goodBookList").find().toArray()
      return result
    } catch (error) {
      return error
    }finally{
      client.close
    }
  } catch (error) {
    return error
  }
}
export const LowPrice = (parent:any,args:any)=>{
  return lowPrice
}
export const LowPriceDb =  async(parent:any,arg:any)=>{
  try {
    const client = await Connect();
    try {
      console.log("this is db query")
      const db = client.db("test")
      const result =await db.collection("lowPrice").find().toArray()
      return result
    } catch (error) {
      return error
    }finally{
      client.close
    }
  } catch (error) {
    return error
  }
}
export const Categroy = (parent:any,args:any)=>{
  console.log(args)
      //不过滤的话返回全部
      return BigCategory
}
export const CategroyDb = async (parent:any,args:any)=>{
  try {
    const client = await Connect();
    try {
      console.log("this is db query")
      const db = client.db("test")
      console.log(args)
      const result =args.id ?  await db.collection("BigCategory").find({id:args.id}).toArray(): await db.collection("BigCategory").find().toArray()
      return result
    } catch (error) {
      return error
    }finally{
      client.close
    }
  } catch (error) {
    return error
  }
}
export const GetSmallCategroy = (parent:any,args:any)=>{
  console.log(args)
      //不过滤的话返回全部
  return SmallCategory
}
export const GetSmallCategroyDb = async (parent:any,args:any)=>{
  try {
    const client = await Connect();
    try {
      console.log("this is db query")
      const db = client.db("test")
      console.log(args)
      console.log(parent)
      const result =await db.collection("SmallCategory").find().toArray()
      return result.filter(item=>item.bigId===parent.id)
    } catch (error) {
      return error
    }finally{
      client.close
    }
  } catch (error) {
    return error
  }
}