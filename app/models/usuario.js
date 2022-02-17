const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

module.exports = ()=>{
    const schema = mongoose.Schema({
        login:{type: String, required: true, index:{unique: true}},
        nome: {type: String, required: true},
        inclusao: {type: Date, default: Date.now}
    });

    schema.plugin(findOrCreate);
    return mongoose.model('Usuario', schema);
}