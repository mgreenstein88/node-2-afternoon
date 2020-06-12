const express = require('express')
const app = express()
const ctrl = require('./controllers/message_controller')

app.use(express.json())
app.use(express.static(_dirname + '/../public/build'));

app.post('/api/messages', ctrl.create)
app.get('/api/messages', ctrl.read)
app.put('/api/messages:id', ctrl.update)
app.delete('/api/messages:id', ctrl.delete)

const PORT = 3032

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})