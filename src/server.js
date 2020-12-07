const express = require('express');

const todo = express();



todo.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});

todo.listen('5000');



