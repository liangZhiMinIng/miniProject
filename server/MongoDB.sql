/*
 Navicat Premium Data Transfer

 Source Server         : four-week
 Source Server Type    : MongoDB
 Source Server Version : 30407
 Source Host           : localhost:27017
 Source Schema         : test

 Target Server Type    : MongoDB
 Target Server Version : 30407
 File Encoding         : 65001

 Date: 14/07/2021 19:45:04
*/


// ----------------------------
// Collection structure for BigCategory
// ----------------------------
db.getCollection("BigCategory").drop();
db.createCollection("BigCategory");

// ----------------------------
// Documents of BigCategory
// ----------------------------
db.getCollection("BigCategory").insert([ {
    _id: ObjectId("60e97db7227fe72571231ef0"),
    id: 1,
    name: "教材",
    path: "/assets/img/edu.png"
} ]);
db.getCollection("BigCategory").insert([ {
    _id: ObjectId("60e97db7227fe72571231ef1"),
    id: 2,
    name: "文艺小说",
    path: "/assets/img/essay.png"
} ]);
db.getCollection("BigCategory").insert([ {
    _id: ObjectId("60e97db7227fe72571231ef2"),
    id: 3,
    name: "童书",
    path: "/assets/img/store.png"
} ]);
db.getCollection("BigCategory").insert([ {
    _id: ObjectId("60e97db7227fe72571231ef3"),
    id: 4,
    name: "人文社科",
    path: "/assets/img/text.png"
} ]);
db.getCollection("BigCategory").insert([ {
    _id: ObjectId("60e97db7227fe72571231ef4"),
    id: 5,
    name: "大学教材",
    path: "/assets/img/all.png"
} ]);

// ----------------------------
// Collection structure for SmallCategory
// ----------------------------
db.getCollection("SmallCategory").drop();
db.createCollection("SmallCategory");

// ----------------------------
// Documents of SmallCategory
// ----------------------------
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ed3"),
    id: 1,
    bigId: 1,
    title: "计算机网络安全",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/teach1.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ed4"),
    id: 2,
    bigId: 1,
    title: "管理学原理",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/teach2.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ed5"),
    id: 3,
    bigId: 1,
    title: "电动力学",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/teach3.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ed6"),
    id: 4,
    bigId: 1,
    title: "触摸屏组态控制技术",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/teach4.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ed7"),
    id: 5,
    bigId: 1,
    title: "西方经济学",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/teach5.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ed8"),
    id: 6,
    bigId: 1,
    title: "现代教育技术",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/teach6.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ed9"),
    id: 1,
    bigId: 2,
    title: "生活是很好玩的",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/goobook.jpg"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231eda"),
    id: 2,
    bigId: 2,
    title: "我足够努力值得未来",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/highPrice02.jpg"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231edb"),
    id: 3,
    bigId: 2,
    title: "努力是为了不辜负自己",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/highPrice01.jpg"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231edc"),
    id: 4,
    bigId: 2,
    title: "允许自己虚度时光",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/goobook05.jpg"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231edd"),
    id: 5,
    bigId: 2,
    title: "终身成长",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/goobook02.jpg"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ede"),
    id: 6,
    bigId: 2,
    title: "文艺女王养成手册",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/goobook04.jpg"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231edf"),
    id: 1,
    bigId: 3,
    title: "如果你喜欢蜂蜜",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/kids1.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ee0"),
    id: 2,
    bigId: 3,
    title: "小巴掌童话",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/kids2.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ee1"),
    id: 3,
    bigId: 3,
    title: "杨红樱注音童书",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/kids4.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ee2"),
    id: 4,
    bigId: 3,
    title: "我们的历史",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/kids5.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ee3"),
    id: 5,
    bigId: 3,
    title: "父与子",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/kids6.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ee4"),
    id: 1,
    bigId: 4,
    title: "柴尔德考古学的革命",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/renwen1.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ee5"),
    id: 2,
    bigId: 4,
    title: "长安与河北之间",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/renwen2.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ee6"),
    id: 3,
    bigId: 4,
    title: "傅统十论",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/renwen3.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ee7"),
    id: 4,
    bigId: 4,
    title: "西部往事",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/renwen4.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ee8"),
    id: 5,
    bigId: 4,
    title: "孔子大历史",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/renwen5.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231ee9"),
    id: 6,
    bigId: 4,
    title: "国家与行政管理",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/renwen6.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231eea"),
    id: 1,
    bigId: 5,
    title: "统计学",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/student1.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231eeb"),
    id: 2,
    bigId: 5,
    title: "陈共《财政学》",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/student2.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231eec"),
    id: 3,
    bigId: 5,
    title: "计算机应用基础",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/student3.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231eed"),
    id: 4,
    bigId: 5,
    title: "会计学",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/student4.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231eee"),
    id: 5,
    bigId: 5,
    title: "大学信息技术基础",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/student5.png"
} ]);
db.getCollection("SmallCategory").insert([ {
    _id: ObjectId("60e976f4227fe72571231eef"),
    id: 6,
    bigId: 5,
    title: "物理",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/student6.png"
} ]);

// ----------------------------
// Collection structure for bookList
// ----------------------------
db.getCollection("bookList").drop();
db.createCollection("bookList");

// ----------------------------
// Documents of bookList
// ----------------------------
db.getCollection("bookList").insert([ {
    _id: ObjectId("60e6697670e04e1aa63c81f1"),
    id: 1,
    name: "特价:",
    price: 8.88,
    path: "/assets/img/highPrice01.jpg"
} ]);
db.getCollection("bookList").insert([ {
    _id: ObjectId("60e6697670e04e1aa63c81f2"),
    id: 2,
    name: "特价:",
    price: 8.88,
    path: "/assets/img/highPrice02.jpg"
} ]);
db.getCollection("bookList").insert([ {
    _id: ObjectId("60e6697670e04e1aa63c81f3"),
    id: 3,
    name: "特价:",
    price: 8.88,
    path: "/assets/img/highPrice03.jpg"
} ]);
db.getCollection("bookList").insert([ {
    _id: ObjectId("60e6697670e04e1aa63c81f4"),
    id: 4,
    name: "特价:",
    price: 8.88,
    path: "/assets/img/goobook02.jpg"
} ]);
db.getCollection("bookList").insert([ {
    _id: ObjectId("60e6697670e04e1aa63c81f5"),
    id: 5,
    name: "特价:",
    price: 8.88,
    path: "/assets/img/goobook03.jpg"
} ]);
db.getCollection("bookList").insert([ {
    _id: ObjectId("60e6697670e04e1aa63c81f6"),
    id: 6,
    name: "特价:",
    price: 8.88,
    path: "/assets/img/goobook04.jpg"
} ]);

// ----------------------------
// Collection structure for foods
// ----------------------------
db.getCollection("foods").drop();
db.createCollection("foods");

// ----------------------------
// Documents of foods
// ----------------------------
db.getCollection("foods").insert([ {
    _id: ObjectId("60e70c336d2a9183978e76b7"),
    id: 1,
    name: "我",
    price: 10,
    status: 1,
    type: "/assets/img/text.png"
} ]);
db.getCollection("foods").insert([ {
    _id: ObjectId("60e70c336d2a9183978e76b8"),
    id: 2,
    name: "food2特价",
    price: 10,
    status: 1,
    type: "hot"
} ]);
db.getCollection("foods").insert([ {
    _id: ObjectId("60e70c336d2a9183978e76b9"),
    id: 3,
    name: "food3",
    price: 10,
    status: 1,
    type: "hot"
} ]);
db.getCollection("foods").insert([ {
    _id: ObjectId("60e70c336d2a9183978e76ba"),
    id: 4,
    name: "food4",
    price: 10,
    status: 1,
    type: "hot"
} ]);
db.getCollection("foods").insert([ {
    _id: ObjectId("60e70c336d2a9183978e76bb"),
    id: 5,
    name: "food5特价",
    price: 10,
    status: 1,
    type: "hot"
} ]);
db.getCollection("foods").insert([ {
    _id: ObjectId("60e70c336d2a9183978e76bc"),
    id: 6,
    name: "food6",
    price: 10,
    status: 1,
    type: "hot"
} ]);

// ----------------------------
// Collection structure for goodBookList
// ----------------------------
db.getCollection("goodBookList").drop();
db.createCollection("goodBookList");

// ----------------------------
// Documents of goodBookList
// ----------------------------
db.getCollection("goodBookList").insert([ {
    _id: ObjectId("60e6693870e04e1aa63c81ec"),
    id: 1,
    title: "世界上所有童话",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/goobook.jpg"
} ]);
db.getCollection("goodBookList").insert([ {
    _id: ObjectId("60e6693870e04e1aa63c81ed"),
    id: 2,
    title: "生活是很好玩的",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/goobook03.jpg"
} ]);
db.getCollection("goodBookList").insert([ {
    _id: ObjectId("60e6693870e04e1aa63c81ee"),
    id: 3,
    title: "文艺女王养成手册",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/goobook04.jpg"
} ]);
db.getCollection("goodBookList").insert([ {
    _id: ObjectId("60e6693870e04e1aa63c81ef"),
    id: 4,
    title: "允许自己虚度时光",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/goobook05.jpg"
} ]);
db.getCollection("goodBookList").insert([ {
    _id: ObjectId("60e6693870e04e1aa63c81f0"),
    id: 5,
    title: "有一天我遇见了世界",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: 5.7,
    preprice: 22.9,
    buy: "加购",
    path: "/assets/img/highPrice03.jpg"
} ]);

// ----------------------------
// Collection structure for lowPrice
// ----------------------------
db.getCollection("lowPrice").drop();
db.createCollection("lowPrice");

// ----------------------------
// Documents of lowPrice
// ----------------------------
db.getCollection("lowPrice").insert([ {
    _id: ObjectId("60ec2ff392350cff90a911a5"),
    id: 1,
    title: "努力不辜负自己",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: "8.8",
    preprice: "20.9",
    buy: "加购",
    path: "/assets/img/highPrice01.jpg"
} ]);
db.getCollection("lowPrice").insert([ {
    _id: ObjectId("60ec2ff392350cff90a911a6"),
    id: 2,
    title: "我值得所有美好",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: "8.8",
    preprice: "12.9",
    buy: "加购",
    path: "/assets/img/highPrice02.jpg"
} ]);
db.getCollection("lowPrice").insert([ {
    _id: ObjectId("60ec2ff392350cff90a911a7"),
    id: 3,
    title: "有一天我遇见世界",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: "8.8",
    preprice: "28.2",
    buy: "加购",
    path: "/assets/img/highPrice03.jpg"
} ]);
db.getCollection("lowPrice").insert([ {
    _id: ObjectId("60ec2ff392350cff90a911a8"),
    id: 4,
    title: "终生成长",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: "8.8",
    preprice: "32.9",
    buy: "加购",
    path: "/assets/img/goobook02.jpg"
} ]);
db.getCollection("lowPrice").insert([ {
    _id: ObjectId("60ec2ff392350cff90a911a9"),
    id: 5,
    title: "生活是很好玩的",
    writer: "作者",
    writername: "[中华出版社]",
    copyright: "出版社",
    copyrightname: "高等教育出版社",
    nowprice: "8.8",
    preprice: "22.5",
    buy: "加购",
    path: "/assets/img/goobook03.jpg"
} ]);

// ----------------------------
// Collection structure for system.js
// ----------------------------
db.getCollection("system.js").drop();
db.createCollection("system.js");

// ----------------------------
// Documents of system.js
// ----------------------------
db.getCollection("system.js").insert([ {
    _id: "aa",
    value: Code("function () {\r\n  //Routine body goes here...\r\n  \r\n}")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("60bec4020390ddeb1a7787da"),
    name: "lis",
    age: 18
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60bec40b0390ddeb1a7787db"),
    name: "zhangsan",
    age: 23
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60bec4130390ddeb1a7787dc"),
    name: "alice",
    age: 23
} ]);

// ----------------------------
// Collection structure for users.manager
// ----------------------------
db.getCollection("users.manager").drop();
db.createCollection("users.manager");

// ----------------------------
// Documents of users.manager
// ----------------------------

// ----------------------------
// Function structure for aa
// ----------------------------
db.system.js.deleteOne({
    _id: "aa"
});
delimiter ;;
db.system.js.insert({
    _id: "aa",
    value: Code("function () {\r\n  //Routine body goes here...\r\n  \r\n}")
})
;;
delimiter ;
