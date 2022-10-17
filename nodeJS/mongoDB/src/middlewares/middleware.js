module.exports = (req, res, next) => {
  if(req.body.cliente)
  console.log()
  console.log(`Passei no global ${req.body.cliente}`)
  next()
}