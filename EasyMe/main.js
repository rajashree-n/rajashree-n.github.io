

let app = require('app');
let BrowserWindow = require('browser-window');
let http = require('http');
let express = require('express')();

let mainWindow = null;
let bodyParser = require('body-parser');


express.use(bodyParser.urlencoded({extended:false}));


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });
    mainWindow.loadURL('file:///' + __dirname + '/index.html');
});

let mongo = require('./mongo.js')(express);

process.on('error', (err) => {
    console.log(err);
});

express.set('port',process.env.PORT || 8080);
express.listen(express.get('port'), () => { console.log('listening on ' + express.get('port')) });
