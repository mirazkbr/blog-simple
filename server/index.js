const express = require('express');
const dbConfig = require('./src/database/mongodbConfig');
const router = require('./src/routes');
const cors = require('cors')
const app = express();

//port
const port = 3001;
app.use(express.json());
app.use(cors())
//database
dbConfig();

//router
app.use(router);


//listeners
app.listen(port, ()=>{
    console.log(`server listening on http://localhost:${port}`);
    
})