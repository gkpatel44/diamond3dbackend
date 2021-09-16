const mongoose = require('mongoose');
const schema = mongoose.Schema;

var userschema = new schema({
    username: {
        type: String,
        unique: true 
        // required: true
    },
    password: { type: String },
    cinfirm_password:{type:String}
   
})
// const myDB = mongoose.connection.useDb('user');
module.exports = mongoose.model("User", userschema);
