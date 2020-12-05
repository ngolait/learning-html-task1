const express = require('express');

const todo = express();


todo.use(express.static('dist'))

todo.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});

todo.listen('5000');



