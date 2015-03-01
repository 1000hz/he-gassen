module.exports = function bound(x, min, max) {
  return x > max ? max
       : x < min ? min
       : x
}