var express = require('express');
var history = require('connect-history-api-fallback');
var path = require('path');
var port = 8080;
var app = express();

app.listen(port);
app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

console.log('打包文件服务' + port);

