var interpolate = require('shifty').interpolate
var css         = require('./apply-css')
var bound       = require('./bound')

module.exports = function animate(page, actors) {
  actors.forEach(function (actor) {
    var el = document.querySelector(actor.el)
    var keyframes = actor.keyframes
    if (typeof keyframes == 'function') keyframes = keyframes(page)

    if (!Object.keys(keyframes).length) throw Error("Keyframes empty for actor " + el)

    var framePositions = Object.keys(keyframes).map(Number)
    var firstKeyframe  = keyframes[framePositions[0]]
    var lastKeyframe   = keyframes[framePositions[framePositions.length - 1]]

    ~framePositions.indexOf(0)   || framePositions.push(0)
    ~framePositions.indexOf(100) || framePositions.push(100)

    var index = framePositions.push(page.position)
      && framePositions.sort(function (x, y) {return x - y})
      && framePositions.indexOf(page.position, 1)

    var lowerBound = framePositions[index - 1]
    var upperBound = framePositions[index + 1]

    var tween  = ((page.position - lowerBound) / (upperBound - lowerBound)).toFixed(4)
    var from   = keyframes[lowerBound] || firstKeyframe
    var to     = keyframes[upperBound] || lastKeyframe

    if (from === to) return css(el, to)

    css(el, interpolate(from, to, tween, actor.easing))
  })
}