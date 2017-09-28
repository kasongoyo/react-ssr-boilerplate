const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const ClientStatsPath = path.join(__dirname, 'public', 'dist', 'stats.json');
const ServerRendererPath = path.join(__dirname, 'public', 'dist', 'server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);


app.set('port', (process.env.PORT || 3000));



//parsing body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.use(ServerRenderer(Stats));

app.listen(app.get('port'), function () {
    console.log('Express server is up on port', app.get('port'));
});