const express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', (req, res)=> {
	res.send();
});


const port = process.env.PORT || 3000;

app.listen(()=>console.log(`your app is listening on ${port}`));