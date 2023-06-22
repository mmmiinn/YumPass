//===== SQLite 데이터베이스를 사용할 수 있는 sqlite 모듈 불러오기
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./yumpass.db', err => {
	if(err) {
		return console.error(err.message);
	}
	console.log("Successful connection to the database");
});

// database 객체에 db, schema, model 모두 추가
global.database = {};

// 초기화를 위해 호출하는 함수
database.init = function(app, config) {

	console.log('init() 호출됨.');
	
	connect(app, config);
}

//데이터베이스에 연결하고 응답 객체의 속성으로 db 객체 추가
function connect(app, config) {
	console.log('connect() 호출됨.');
	
	// 데이터베이스 연결 : config의 설정 사용
	mysql.Promise = global.Promise;
	var pool = mysql.createPool({
		connectionLimit : 10,
		host : '127.0.0.1',
		user : 'APP',
		password : 'APP',
		database : 'WRM',
		debug : false
	});

	//커넥션 풀에서 연결 객체를 가져옵니다.
	pool.getConnection(function(err, conn){
		if(err){
			if(conn){
				conn.release(); //반드시 해제해야 합니다.
			}
			console.error.bind(console, 'mysql connection error.');	
		}
		console.log('데이터베이스 연결 스레드 아이디 : '+conn.threadId);
		database.db = conn;
		
		app.set('database', database);
		console.log('database 객체가 app 객체의 속성으로 추가됨.');

	});
}

// database 객체를 module.exports에 할당
module.exports = database;
