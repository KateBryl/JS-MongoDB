import  express  from 'express'
import mongoose from 'mongoose'
import router from "./router.js"
import PostController from "./PostController.js"


const PORT = 7000;
const DB_URL = 'mongodb+srv://Kate:kate@cluster0.0ucdgu8.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/api', router)

app.use(express.json())


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
