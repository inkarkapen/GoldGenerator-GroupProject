var mongoose =require('mongoose')
var Ninja = mongoose.model('Ninja')
module.exports = {
    index: function(req,res){
        Ninja.create({}, function(err, ninjaCreated){
            //console.log(ninjaCreated)
            res.json(ninjaCreated)
        })
    },
    update: function(req, res){
        //console.log(req.body)
        Ninja.findOne({_id: req.body.ninjaId}, function(err, foundNinja){
            //console.log(foundNinja)
            var earnOrLose = ''
            if(req.body.lastGold >= 0){
                earnOrLose = 'earned'
            }
            else{ earnOrLose = 'lost'}
            foundNinja.total += req.body.lastGold
            foundNinja.activity.push('You have been in '+req.body.building+' and '+earnOrLose+' '+req.body.lastGold+' golds')
            foundNinja.save(function(err){
                res.json(foundNinja)
            })
        })

    }
}