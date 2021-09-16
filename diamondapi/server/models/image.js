const mongoose = require('mongoose');
const schema = mongoose.Schema;

var imageSchema = new schema({
    orderid: {
        type: Number,
        unique: true
        // required: true
    },
    name: { type: String, },
    size: { type: String, },
    shape: { type: String, },
    status: { type: String, },
    img: {
        data: Buffer,
        type: String,
    }
})

// const myDB = mongoose.connection.useDb('database');
module.exports = mongoose.model('image', imageSchema);