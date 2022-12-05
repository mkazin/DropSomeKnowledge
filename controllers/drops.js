const Drop = require('../models/Drop')

module.exports = {
    getDrops: async (req,res)=>{
        try{
            const dropItems = await Drop.find()
            res.render('drops.ejs', {drops: dropItems})
        }catch(err){
            console.log(err)
        }
    },
    createDrop: async (req, res)=>{
        try{
            await Drop.create({todo: req.body.dropItem, completed: false})
            console.log('Drop has been added!')
            res.redirect('/drops')
        }catch(err){
            console.log(err)
        }
    },
    deleteDrop: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Drop.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    