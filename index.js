const express = require('express');

const app = express();
const port = 5001;


app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.get('/css/style.css', (req, res) => {      
    res.sendFile('css/style.css', {root: __dirname});
});

app.get('/js/date.js', (req, res) => {
    res.sendFile('js/date.js', {root: __dirname});
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

