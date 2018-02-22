var controller = require('./../controllers/controller')
module.exports = function(app){
    app.get('/create', function(req, res){
        controller.index(req,res)
    })
    app.post('/update', function(req, res){
        controller.update(req, res)
    })
}