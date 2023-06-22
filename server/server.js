const express = require("express");
require('dotenv').config(); //환경변수 설정

// 익스프레스 객체 생성
const app = express();
const test = require("./Router/test");
const auth = require("./Router/auth");

app.use("/api", test);
app.use("/auth", auth);

const port = 5000; //노드서버가 사용할 포트넘버
app.listen(port, () => console.log(`Listening on port ${port}`));