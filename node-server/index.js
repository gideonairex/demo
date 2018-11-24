const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 5000

app.get('/search', (req, res) => {
    req.query.key = 'cn1r8m5v6ngzk10xl66pcxqe';
    request.get({
        url : 'http://api.pipl.com/search',
        qs: req.query
    },(err,httpResponse,body) => {
        res.send(body);
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))