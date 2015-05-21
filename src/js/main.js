var animate     = require('./util/animate')
var Page        = require('./page')
var actors      = require('./actors')

var hegassen = document.querySelector('.hegassen')
var title    = document.querySelector('.page-title')
var position = document.querySelector('.position')

document.body.style.height = '60000px'
window.setTimeout(function () { document.body.scrollTop = 0 }, 100)

var page = new Page(29288, 959)

window.onresize = window.onload = function () {
  page.init()
  hegassen.style.width = page.width + 'px'
}

var render = function () {
  page.updatePosition()
  if (window.POSITION)
    position.innerHTML = page.position.toFixed(2) + '%'

  animate(page, actors)
  window.requestAnimationFrame(render)
}

window.onload()
render()