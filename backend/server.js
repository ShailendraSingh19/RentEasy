const express = require('express')
const cors = require('cors'); // Import the cors package

const app = express()
const port = 5000
const dbConnection = require('./db')
app.use(express.json())
app.use(cors());

app.use('/api/cars/' , require('./routes/bikesRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute'))


const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))


 


app.listen(port, () => {console.log(`Node JS Server Started in Port ${port}`); dbConnection()})