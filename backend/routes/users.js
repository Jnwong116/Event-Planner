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
/*
Request body expects:
{
    name,
    style,
    messages,
    tasks
}

*/
router.route('/:user_id/events').post((req, res)=>{
    const id = req.params.user_id
    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  // so that we don't run the rest of the handler.
	}
    User.findById(id).then((user)=>{
        if(!user){
            res.status(400).send('Resource not found')
        }else{
            let events = user.events
            events.push(req.body)
            User.updateOne({_id: id}, {$set: {events: events}}).then((user)=>{
                if(!user){
                    res.status(400).send()
                }
            }).catch((error)=>{
                log(error)
                res.status(500).send('Internal Server Error')
            })
            res.send({event: user.events[user.events.length-1], user: user})
        }
    })

})
router.route('/:user_id/events/:event_id').delete((req, res)=>{
    const id = req.params.user_id
    const event_id = req.params.event_id
    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  // so that we don't run the rest of the handler.
	}
    User.findById(id).then((user)=>{
        if(!user){
            res.status(400).send('Resource not found')
        }else{
            let events = user.events
            let found = null
            for(let i=0; i<events.length; i++){
                if(events[i]._id == event_id){
                    found = events[i]
                    events.splice(i, 1)
                }
            }
            User.updateOne({_id: id}, {$set: {events: events}}).then((user)=>{
                if(!user){
                    res.status(400).send()
                }
            }).catch((error)=>{
                log(error)
                res.status(500).send('Internal Server Error')
            })
            res.send({event: found, user: user})
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