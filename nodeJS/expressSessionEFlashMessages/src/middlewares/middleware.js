module.exports = (req, res, next) => {
  res.locals.umaVariavelLogal = "Este é o valor da variável"
  next()
}