#!/usr/bin/env node

var scp = require('scp');
var files = process.argv.slice( 2, process.argv.length )
var config = {
      host: "jshawl.com",
      path: "/var/www/jshawl.com/locker/"
    }

files.forEach( function( file ){
  scp.send({
    file: file,
    host:'jshawl.com',
    path: '/var/www/jshawl.com/locker/'
  }, function( ){
    console.log( "http://jshawl.com/"+file );
  });
});