const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  let msg = {
    title
  }
  if(err.errors) {
    for(error in err.errors) {
      msg[error] = err.errors[error].properties.message
    }
  } else {
    err.message
  }

  res.status(statusCode).json({
    message: msg,
    stack: process.env.NODE_ENV === 'development' ? err.stack : null
  })

}

module.exports = {
  errorHandler
}