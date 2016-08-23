/**
 * Created by baobaobao on 2016/8/20.
 */
const express = require('express');
const path = require('path');
var compression = require('compression');
const port = process.env.PORT || 8080;
const app = express();

// serve static assets normally
app.use(express.static(path.resolve(__dirname,'../dist')));
app.use(compression());
// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
});

app.listen(port);
console.log("server started on port " + port);
