const express = require('express');
const server = express();

server.use((req, res, next)=>{

    console.log('Start...');
    next();
    console.log('End...');

});

server.use((req, res, next)=>{

    console.log('Resposta');
    res.send('<h1>EXPRESS</h1>')

})

server.listen(3002, () => console.log("online"));