const express = require('express');
const app = express();
app.set('port', (process.env.PORT) || 3000);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Eurusbot');
});

app.listen(app.get('port'), () => console.log('app is running on port 3000!'));