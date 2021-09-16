const data = require('../models/image');

exports.getimages = (req, res) => {
    console.log("getimages request fetched");
    if (req.body.orderid) {

        return data.find({ orderid: req.body.orderid }, (err, doc) => {
            if (doc.length <= 0) {
                return res.send("user not found")
            } else {
                res.status(200).json({
                    message: "User list retrieved successfully!",
                    users: doc
                });
            }
        })
    } else {
        res.json("please pass your orderid to get data")
    }
}

exports.getsingleuserimages = (req, res) => {
    console.log("getsingleuserimages request fetched");
    if (req.body.orderid) {

        return data.find({ orderid: req.body.orderid }, (err, doc) => {
            console.log(doc);
            if (doc.length <= 0) {
                return res.send("user not found")
            } else {
                res.status(200).json({
                    message: "User list retrieved successfully!",
                    users: doc
                });
            }
        })
    } else {
        res.json("please pass your orderid to get data")
    }
}

exports.createproduct = (req, res) => {
    console.log("createproduct request fetched");
    console.log(req);
    const url = req.protocol + '://' + req.get('host');
    let newproduct = new data({
        orderid: req.body.orderid,
        name: req.body.name,
        size: req.body.size,
        shape: req.body.shape,
        status: req.body.status,
        img: url + '/public/' + req.file.filename
    })
    newproduct.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
            userCreated: {
                orderid: result.orderid,
                name: result.name,
                size: result.size,
                shape: result.shape,
                status: result.status,
                img: result.img
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
}

exports.deleteproduct = (req, res) => {
    console.log("deleteproduct request fetched");
    if (req.body.orderid) {
        data.findOneAndDelete({ orderid: req.body.orderid }, (err, doc) => {
            console.log(doc);
            if (doc) {
                res.send("user deleted successfully");
            }
        })
    }
}

exports.allproductlist = (req, res) => {
    console.log("allproductlist request fetched");
    data.find({}, (err, doc) => {
        res.send(doc);
    })

}


exports.updateproduct = (req, res, next) => {
    console.log(req.body);
    console.log("update product requested");
    if (req.body.orderid) {
        const url = req.protocol + '://' + req.get('host');
        if (req.body.img) {
            var newproduct = {
                name: req.body.name,
                size: req.body.size,
                shape: req.body.shape,
                status: req.body.status,
                img: url + '/public/' + req.file.filename
            }
        } else {
            var newproduct = {
                name: req.body.name,
                size: req.body.size,
                shape: req.body.shape,
                status: req.body.status,
            }
        }
        data.findOneAndUpdate({ orderid: req.body.orderid }, newproduct, (err, result) => {
            if (result) {

                return res.status(201).json({
                    res_status: "SUCCESS",
                    message: "User update successfully!"
                })
            }
            else { res.json({ msg: "user not exists" }) }
        }
        )
    }
    else {

        res.status(500).json({
            status: "FAILED",
            message: "User not found!"
        })
    }
}
/*
exports.userprof = (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    const user = new data({
        orderid: req.body.orderid,
        name: req.body.name,
        img: url + '/public/' + req.file.filename
    });
    user.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
            userCreated: {
                orderid: result.orderid,
                img: result.img
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
}


exports.get = (req, res, next) => {
    data.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    })
}*/