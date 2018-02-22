var mongoose = require('mongoose')
var NinjaSchema = new mongoose.Schema({
    total: {type: Number, default: 0},
    activity: {type: Array}
})
mongoose.model('Ninja', NinjaSchema)