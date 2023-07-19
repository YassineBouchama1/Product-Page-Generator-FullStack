

// refactor handdle error that built in express  
globalError = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    const Mode = 'development'

    if (Mode === 'development') {
        sendErrorForDev(err, res)
    }
    else {
        sendErrorForProd(err, res)

    }

}


// @desc display all msg error  for backend 
const sendErrorForDev = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status, // 400 or 500 ... 
        error: err,
        message: err.message,

        stack: err.stack // whr is erro happend
    })
}

// @desc display less msg error  for clints side
const sendErrorForProd = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status, // 400 or 500 ... 

        message: err.message,


    })
}

module.exports = globalError

// //@ Desc : MiddleWare Handel Error Inside Express = every error wil handl
// // MORE : built method in express for  catch any error
//----- Normal Syntex -----------
// app.use((err, req, res, next) => {
//     res.status(404).json({
//         err: "yassine"
//     })
// })
