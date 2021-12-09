const log = console.log

const router = require('express').Router()
const { ObjectID } = require('mongodb')

let User = require('../models/user.model')


// Gets all users
router.route('/').get((req, res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error: '+err))
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
    style
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
            const event = {
                name: req.body.name,
                style: req.body.style,
                messages: [],
                tasks: [],
                userRoles: [{
                    username: user.username,
                    role: "Admin"
                }]
            }
            let events = user.events
            events.push(event)
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
                if(events[i]._id === event_id){
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
                console.log(req.session)
                req.session.user = user._id;
                req.session.username = user.username; // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
                res.send({ currentUser: user.username })
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
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
})

router.route('/check-session').get((req, res)=>{
    if (env !== 'production' && USE_TEST_USER) { // test user on development environment.
        req.session.user = TEST_USER_ID;
        req.session.email = TEST_USER_EMAIL;
        res.send({ currentUser: TEST_USER_EMAIL })
        return;
    }

    if (req.session.user) {
        res.send({ currentUser: req.session.email });
    } else {
        res.status(401).send();
    }
})

router.route('/add').post((req, res)=>{
    const newUser = new User(req.body)

    newUser.save()
        .then(()=>res.send(newUser))
        .catch(err=>res.status(400).json('Error: '+err))
})

router.route('/:user_id/events/:event_id').get((req, res) => {
    const id = req.params.user_id
    const event_id = req.params.event_id

    if (!ObjectID.isValid(id) || !ObjectID.isValid(event_id)) {
        res.status(404).send('Resource not found')
        return;
    }
    User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send('Resource not found')
		}
		else {
			const event = user.events.id(event_id)

			if (!event) {
				res.status(404).send('Resource not found')
			}

			else {
				res.send({ event })
			}
		}
	})
	.catch((error) => {
		log(error)
		res.status(500).send('Internal server error')
	})
})

module.exports = router;