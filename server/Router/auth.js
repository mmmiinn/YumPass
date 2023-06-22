const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const sqlite3 = require("sqlite3").verbose();
const jwt = require('jsonwebtoken');

//로그인처리
router.get("/signin", (req, res) => {
    //사용자명, 비밀번호
    const {username,password} = req.query;
    const enpassword = crypto.createHmac("sha256",Buffer.from(username))
        .update(Buffer.from(password))
        .digest('base64');

    let db = new sqlite3.Database('./db/yumpass.db');
    let sql = `SELECT EMPLYR_ID id,
                  PASSWORD password
           FROM LETTNEMPLYRINFO
           WHERE EMPLYR_ID  = ?`;
    db.get(sql, [username], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        console.log(row);
        console.log(row.password);
        console.log(enpassword);
       if(row&& (row.password === enpassword)){
            console.log(process.env.JWT_SECRET);
            //로그인 성공
            const token = jwt.sign(username, process.env.JWT_SECRET);
            res.send({token:token});
       }else{
            //로그인 실패
            console.log("로그인 실패");
       }
    });

    //데이터 베이스 종료
    db.close();
});

module.exports = router;