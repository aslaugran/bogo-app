#!/usr/bin/env nodejs
var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();


// serve static files from /public
app.use(express.static(__dirname + '/public'));

app.listen(3006, function () {
  console.log('Demo app on port 3006')
});
