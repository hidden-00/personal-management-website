const mongoose = require('mongoose')
const schema = mongoose.Schema;

const FinaceSchema = new schema({
    name:{type: String, required: true},
    mon_hang:{type:String, required: true},
    type:{type: String, required: true},
    money:{type: Number, required: true},
    method:{type: String, required: true},
    place:{type:String, required: true},
})

module.exports = Finance = mongoose.model('finances', FinaceSchema);