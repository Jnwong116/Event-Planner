const router = require('express').Router()
const { ObjectID } = require('mongodb')

let User = require('../models/user.model')

router.route('/').get((req, res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error: '+err))
})
router.route('/:user_id').get((req, res)=>{
    const id = req.params.user_id
    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  // so that we don't run the rest of the handler.
	}
    User.findById(id).then((user)=>{
        if(!user){
            res.status(400).send('Resource not found')
        }else{
            res.send(user)
        }
    })

})
router.route('/:user_id/events').get((req, res)=>{
    const id = req.params.user_id
    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  // so that we don't run the rest of the handler.
	}
    User.findById(id).then((user)=>{
        if(!user){
            res.status(400).send('Resource not found')
        }else{
            res.send({events: user.events})
        }
    })

})
router.route('/add').post((req, res)=>{
    const newUser = new User(req.body)

    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err=>res.status(400).json('Error: '+err))
})

module.exports = router;