const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer');

const indexRouter = require("./server/routes/indexRouter");
const config = require("./server/config/database")

const app = express();
const port = 3001;


mongoose.connect(config.database);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
/********/

/*** */


app.get('/', (req, res) => {
    res.send("welcome to image api")
})

app.use('/image', indexRouter);

app.listen(port, () => console.log(`app listening on port......... ${port}`));