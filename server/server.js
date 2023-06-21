const express = require("express");
const app = express();
const test = require("./Router/test");

app.use("/api", test);

const port = 5000; //노드서버가 사용할 포트넘버
app.listen(port, () => console.log(`Listening on port ${port}`));