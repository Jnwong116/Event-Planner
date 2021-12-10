# team40

## Third Party Libraries
We used react

### How To Use
The general user will be able to create a new account via the register button and filling out the required information. 
Then they will be asked to log back in with their user credentials. 

Once logged in they can create a new event by hitting the black circle in the bottom left, from there they add information about the event name and the color they want the event tile to be.
Once they have events created, they can click on any of their event tiles which will redirect them to the event page. 

Once on the event page, depending on if they're an admin of the event or a general attendee, they will see different things.
If they're an admin, they will be able to add new users to the event and delete users from the event. 

All users will be able to see the list of tasks and messages. Users can send messages in the chat box. 
They will also be able to add new tasks and delete old tasks, in this way they can update the task and the status of the task they are working on. 

If any user hits the square in the top right, they can go back to the dashboard. 
From the dashboard they can edit their user information or logout. 

To edit their user information they simply just edit the input boxes with the new information they would like. 


### Express Routes
Most of our routes are in users.js.

/users/ will return all users in the DB.
Will return an array of users.

/users/check-session will check the user session.

/users/login will log the user in.

/users/logout will log the user out.

GET /users/:user_id will return a specific user based on ID
It will return the user object.

/users/add will add a new user.
It expects to have a user object containing: {username, password, email, name}
It will return the user object

POST /users/:user_id will edit the user info based on the body
It expects to have a user object containing: {username, password, email, name}
It will return the user object

GET /users/:user_id/events gets all the events the user has access to.
It will return the user and a list of the user's events.

POST /users/:user_id/events will add an event to the user
It expects to have an event object with: {name, style}
It will return the event and the user.

DELETE /users/:user_id/events/:event_id deletes an event with event_id from the user.
Returns the event deleted and the user.

GET /users/events/:event_id gets a specific event from the DB
returns the event

POST /users/events/:event_id/addUser adds a user to an event
It expects a userRole object with: {username, role}
returns the event

DELETE /users//events/:event_id/deleteUser deletes a user from the event
Expects {username}
returns the updated event

POST /users/events/:event_id/addTask adds a task to the event
Expects a task object with: {name, status, date}
Returns the updated event

DELETE /users/events/:event_id/deleteTask/:task_id deletes a task from the event based on the parameters
returns the updated event

GET /users/events/:event_id/messages gets all messages in an event
returns a list of messages

POST /users/events/:event_id/messages adds a message to the list of messages in the event
Expects a message object with {sender, content, timestamp}
returns a list of messages

