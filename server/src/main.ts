// const express = require("express")
// import http from "http"
import express ,{Express} from "express";
import {server as gql_server} from "./graphql"
import {useRouter} from "./router"
import cors from "cors";
const app:Express = express()
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:false}))
// app.use("前缀路径，不写默认/"express.static('你要发布的静态资源的路径'))
app.use("/assets",express.static('./static'))
useRouter(app)

//提供一个中间件，将app注册到graphql中
gql_server.applyMiddleware({
  app,
  path:"/gql"
})
const port = 3000
app.listen(port,() => console.log(`web server is starting,listen port ${port}`))


// const http_server = http.createServer(app)