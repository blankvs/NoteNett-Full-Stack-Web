require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')

const authCtrl = require('./controllers/authController')
const noteCtrl = require('./controllers/noteCtrl')
const pinCtrl = require('./controllers/pinCtrl')

const verifyUser = require('./middleware/verifyUser')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json())
app.use(
    session({
        saveUninitialized: true,
        resave: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
    })
)

//AUTH
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth', authCtrl.getUser)

//NOTE
app.get('/api/get', noteCtrl.get)
app.post('/api/add', noteCtrl.add)
app.put('/api/edit', noteCtrl.edit)
app.delete('/api/remove', noteCtrl.remove)

//PIN
app.get('/api/get', pinCtrl.get)
app.post('/api/add', pinCtrl.add)
app.put('/api/edit', pinCtrl.edit)
app.delete('/api/remove', pinCtrl.remove)

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
}).then((db) => {
    app.set('db', db)
    console.log('db set')
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err))