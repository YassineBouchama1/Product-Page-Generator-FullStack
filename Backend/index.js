const express = require('express')
const app = express()
const dotenv = require('dotenv')
const globalError = require('./middleWares/errorMiddleWar')
const dbContact = require('./config/Db')
const path = require('path')
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const productsRoute = require('./routes/productRoute')
const uploaderRoute = require('./routes/uploaderRoute')
const orderRoute = require('./routes/orderRoute')
const ApiError = require('./utils/ApiError')

const cors = require('cors');

dotenv.config({ path: '.env' })



// Parse JSON bodies
app.use(express.json())

app.use(cors({ origin: 'https://product-page-generator-backend.vercel.app' }))



dbContact()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
//endpoit get all images
// app.use('/images' , express.static('./uploads'))
app.use(express.static(path.join(__dirname, 'uploads')))

app.get("/test", (req, res) => res.send("Express on Vercel"));



app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/Products', productsRoute)
app.use('/api/v1/Orders', orderRoute)

app.use('/api/v1/uploader', uploaderRoute)










// //endpoit get all images
// // app.use('/images' , express.static('./uploads'))
// app.use(express.static(path.join(__dirname, 'uploads')))

//@Desc : Handle Error if User Request Url Not Found
app.all('*', (req, res, next) => {

    next(new ApiError(`cant find this url  ${req.originalUrl}`, 400))

})



//@ Desc : MiddleWare Handel Error Inside Express = every error wil handl
// MORE : built method in express for  catch any error 
app.use(globalError)


const PORT = process.env.PORT


const servier = app.listen(PORT, () => {
    console.log(`server working on Port:  ${PORT}`)
})



// Events => list =? callback(err)  handle any error outside  express like mongoose ...
process.on('unhandledRejection', (err) => {
    console.error(`UnhandledRejection Errors ${err.name} | ${err.message}`)
    servier.close(() => {
        console.error(`ShuttDown...`)

        process.exit(1)

    })
})
