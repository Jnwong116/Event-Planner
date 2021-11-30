const router = require('express').Router()
let Event = require('../models/event.model')

router.route('/').get((req, res)=>{
    Event.find()
        .then(events=>res.json(events))
        .catch(err=>res.status(400).json('Error: '+err))
})

router.route('/add').post((req, res)=>{
    const newEvent = new Event(req.body)

    newEvent.save()
        .then(()=>res.json('Event added!'))
        .catch(err=>res.status(400).json('Error: '+err))
})

module.exports = router;