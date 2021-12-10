const log = console.log

const router = require('express').Router()
const { ObjectID } = require('mongodb')

let {User, Event} = require('../models/user.model')

// Gets all users
router.route('/').get((req, res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error: '+err))
})
router.route('/check-session').get((req, res)=>{
    console.log("check session")
    console.log(req.session)

    if (req.session) {
        res.status(200).send({ currentUser: req.session.email });
    } else {
        res.status(401).send();
    }
})

//Login
router.route('/login').post((req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    // log(email, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findOne({username: username})
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            if(user.password === password){
                
                req.session.email = user.email;
                req.session._id = user._id;
                req.session.user = user.username; // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
                console.log("login")
                console.log(req.session)
                res.send({ currentUser: user })
                return
            }else{
                res.status(401).send()
            }
        })
        .catch(error => {
            console.log(error)
            res.status(400).send()
        });
})

// A route to logout a user
router.route('/logout').get((req, res)=>{
    // Remove the session
    console.log("logout")
    console.log(req.session)
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            console.log(req.session)
            res.send()
        }
    });
    
})

// Gets user by ID
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

// Add a user
router.route('/add').post((req, res)=>{
    const newUser = new User(req.body)

    newUser.save()
        .then(()=>res.send(newUser))
        .catch(err=>res.status(400).json('Error: '+err))
})

// Edits user info
router.route('/:user_id').patch((req, res) => {
    const id = req.params.user_id
    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  // so that we don't run the rest of the handler.
	}
    
    const fieldsToUpdate = {}
    req.body.map((change) => {
		const propertyToChange = change.path.substr(1)
		fieldsToUpdate[propertyToChange] = change.value
	})

    User.findOneAndUpdate({_id: id}, {$set: fieldsToUpdate}, {new: true, useFindAndModify: false})
    .then((user) => {
        if (!user) {
            res.status(404).send('Resource not found')
        }
        else {
            res.send(user)
        }
    })
    .catch((error) => {
        log(error)
        res.status(400).send('Bad Request')
    })

})

// Get all events
router.route('/:user_id/events').get((req, res)=>{
    const id = req.params.user_id
    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  // so that we don't run the rest of the handler.
	}
    User.findById(id).then((user)=>{
        if(!user){
            res.status(400).send('Resource not found')
            return;
        }
    })

    User.findById(id)
    .populate('events')
    .exec(function (err, user) {
        if (err) {
            log(err)
        }
        res.send({user: user, events: user.events})
    })

})
/*
Request body expects:
{
    name,
    style
}
*/
// Adds an event
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
            const event = new Event({
                name: req.body.name,
                style: req.body.style,
                messages: [],
                tasks: [],
                userRoles: [{
                    username: user.username,
                    role: "Admin"
                }]
            })

            event.save()
            .catch((error) => {
                log(error)
                res.status(400).send('Bad Request')
            })

            let events = user.events
            events.push(event._id)
            User.updateOne({_id: id}, {$set: {events: events}}).then((user)=>{
                if(!user){
                    res.status(400).send()
                }
            }).catch((error)=>{
                log(error)
                res.status(500).send('Internal Server Error')
            })
            
            User.findById(id)
            .populate('events')
            .exec((err, user) => {
                if (err) {
                    log(err)
                }
                res.send({event: user.events[user.events.length-1], user: user})
            })
        }
    })
})

//Deletes event from user
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
            for(let i=0; i<events.length; i++){
                if(events[i].toString() === event_id){
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
            Event.findById(event_id).then((event) => {
                let users = event.userRoles
                for (let i = 0; i < users.length; i++) {
                    if (users[i].username === user.username) {
                        users.splice(i, 1)
                    }
                }
                Event.updateOne({_id: event_id}, {$set: {userRoles: users}}).then((event) => {
                    if (!event) {
                        res.status(400).send()
                    }
                })
                .catch((error) => {
                    log(error)
                    res.status(500).send('Internal Server Error')
                })

                User.findById(id)
                .populate('events')
                .exec((err, user) => {
                    if (err) {
                        log(err)
                    }
                    res.send({event: event, user: user})
                })
            })
            
        }
    })
})

// Get a specific event
router.route('/events/:event_id').get((req, res) => {
    const event_id = req.params.event_id

    if (!ObjectID.isValid(event_id)) {
        res.status(404).send('Resource not found')
        return;
    }

    Event.findById(event_id).then((event) => {
        if (!event) {
            res.status(400).send('Resource not found')
        }
        else {
            res.send({event})
        }
    })
    
})

// Adds user to an event
router.route('/events/:event_id/addUser').post((req, res) => {
    const event_id = req.params.event_id

    if (!ObjectID.isValid(event_id)) {
        res.status(404).send('Resource not found')
        return;
    }
    
    let userRole = {
        username: req.body.username,
        role: req.body.role
    }

    User.find({ username: userRole.username })
    .then((userList) => {
        let user = userList[0]
        if (!user) {
            res.status(404).send('Resource not found')
        }
        else {
            let events = user.events
            events.push(event_id)

            User.updateOne({_id: user._id}, {$set: {events: events}}).then((user)=>{
                if(!user){
                    res.status(400).send()
                }
            }).catch((error)=>{
                log(error)
                res.status(500).send('Internal Server Error')
            })

            Event.findById(event_id).then((event) => {
                if (!event) {
                    res.status(404).send('Resource not found')
                }
                else {
                    for (let i = 0; i < event.userRoles.length; i++) {
                        if (event.userRoles[i].username === userRole.username) {
                            res.status(400).send('Bad Request')
                        }
                    }
        
                    event.userRoles.push(userRole)
                    event.save()
                    res.send({event: event })
                }
            })
            .catch((error) => {
                log(error)
                res.status(500).send('Internal server error')
            })
        }
    })
    .catch((error) => {
        log(error)
        res.status(400).send('Bad Request')
    })
})

// Remove user from event
router.route('/events/:event_id/deleteUser').delete((req, res) => {
    const event_id = req.params.event_id

    if (!ObjectID.isValid(event_id)) {
        res.status(404).send('Resource not found')
        return;
    }

    let delete_user = req.body.username;

    User.find({ username: delete_user })
    .then((userList) => {
        let user = userList[0]
        if (!user) {
            res.status(404).send('Resource not found')
        }
        else {
            let events = user.events
            for(let i=0; i<events.length; i++){
                if(events[i].toString() === event_id){
                    events.splice(i, 1)
                }
            }

            User.updateOne({_id: user._id}, {$set: {events: events}}).then((user)=>{
                if(!user){
                    res.status(400).send()
                }
            }).catch((error)=>{
                log(error)
                res.status(500).send('Internal Server Error')
            })
        }
    })
    .catch((error) => {
        log(error)
    })

    Event.findById(event_id).then((event) => {
        if (!event) {
            res.status(404).send('Resource not found')
        }
        else {
            let users = event.userRoles
            for (let i = 0; i < users.length; i++) {
                if (users[i].username === delete_user) {
                    users.splice(i, 1)
                }
            }

            Event.updateOne({_id: event_id}, {$set: {userRoles: users}}).then((new_event)=>{
                if(!new_event){
                    res.status(400).send()
                }
                else {
                    Event.findById(event_id).then((final_event) => {
                        res.send({final_event})
                    })
                }
            }).catch((error)=>{
                log(error)
                res.status(500).send('Internal Server Error')
            })
        }
    })
    .catch((error) => {
        log(error)
        res.status(500).send('Internal server error')
    })
})



module.exports = router;