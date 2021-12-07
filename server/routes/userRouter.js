const express = require("express");
const Router = express.Router();
const multer = require('multer');
const controller = require("../controller/index");
// const uuidv4 = require('uuid/v4');
// const { v4: uuidv4 } = require('uuid');
// uuidv4();
const DIR = './public/';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null,/* uuidv4() + '-' + */fileName)
//     }
// });

// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage });


Router.post('/getsingleuser', controller.getimages);
// Router.post('/upload', upload.single('img'), controller.createproduct);
Router.post ('/upload',upload.array('filemultipleinput', 100),upload.single('img') ,controller.createproduct)
Router.delete('/delete', controller.deleteproduct);
Router.put('/update', upload.single('img'), controller.updateproduct);
Router.get('/allproduct', controller.allproductlist);
Router.post('/getsingleuserimage',controller.getsingleuserimages)

module.exports = Router;