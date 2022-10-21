module.exports = (err, req, res, next) => {
  if(err) {
    console.log(err)
    return res.render("404")
  }
  next()
}