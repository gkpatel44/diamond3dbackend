const data = require('../models/user')

/* USER LOGIN */
exports.usersignin = (req, res) => {
    
    console.log('signin');
    data.find({ username: req.body.username, password: req.body.password }, (err, result) => {
        if (result.length <= 0) {
            return res.status(404).json({
                statusCode: 404,
                error: "username or password is wrong plese re-enter"
            });
        }
        res.status(200).json({ success: "OK", data: result, statusCode: 200 });
    })
}

/*USER SIGNUUP */
exports.usersignup = (req, res) => {

    console.log('signout', req.body);
    if (req.body.username == "" || req.body.password == "" || req.body.cinfirm_password == '') {
        return res.status(500).json({
            statusCode: 500,
            error: "username or password is empty please input all field"
        });
    }

    if (req.body.password !== req.body.cinfirm_password) {
        return res.status(500).json({
            statusCode: 500,
            error: "password and confirm password not matched"
        });
    }

    data.find({ username: req.body.username }, ((err, result) => {
        if (result.length > 0) {
            return res.status(409).json({
                statusCode: 409,
                error: "user alredy exists please input uniq username"
            });
        }
    }));

    let newdata = new data({
        username: req.body.username,
        password: req.body.password,
        cinfirm_password: req.body.cinfirm_password
    });

    newdata.save().then(result => {
        res.status(200)
            .json({ success: "OK", data: result, statusCode: 200 });
    })
}
