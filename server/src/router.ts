import {Express} from "express"

import * as api from "./api";
export const useRouter = (app:Express) =>{

  // app.get(http访问的路径,callback函数function(req,resp){})
/*
request(请求)：可以拿到前端向后台请求的所有东西
response(响应)：将返回值返回给前台
*/
  app.get("/",api.RootApi)
  
  app.get("/list",api.GetList)

  app.get("/if",api.GetIf)
  // app.get("*",function(req,resp){
  //   console.log(req.query);
  //   if(req.query.a&&req.query.a === "1"){
  //     resp.send([
  //       {n:1},
  //       {n:2},
  //       {n:3}
  //     ])
  //   }else{
  //     resp.send("hello world")
  //   }
    
  // })
  app.get("/pingdb",api.PingDb)
  app.post("/mockapi",api.MockApi)
  
  app.post("/mockrole",api.MockRole)
  app.post("/api/search",api.SearchDb)
  app.post("/api/booktopdata",api.BookList)
  app.post("/api/goodbookdata",api.GoodBookList)

}