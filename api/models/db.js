const mongoose = require('mongoose');
var gracefulShutdown;
const dbURI = 'mongodb://localhost/CrudDB';
if(process.env.NODE_ENV === 'production'){
    dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});
//capturing app termination/restart events
//to be called when process is restarted or terminated
gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
//for when nodemon restarts, SIGUSR2 signal is revieced gracefully shutdown nodemon(app) 
process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination when SIGINT signal is recieved
process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});

process.on('SIGTERM', function(){
    gracefulShutdown('Heroke app termination', function(){
        process.exit(0);
    });
});
//importing user model and schemas
require('./user');