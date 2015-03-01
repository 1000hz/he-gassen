var bound = require('./util/bound')

var Page = function (WIDTH, HEIGHT) {
  this.WIDTH  = WIDTH
  this.HEIGHT = HEIGHT
  this.init()
  this.updatePosition()
}

Page.prototype.init = function () {
  this.width = this.WIDTH * window.innerHeight / this.HEIGHT
  this.scrollHeight = document.body.scrollHeight - window.innerHeight
  this.scrollWidth = this.width - window.innerWidth
}

Page.prototype.updatePosition = function () {
  this.position = bound(document.body.scrollTop / this.scrollHeight, 0, 100) * 100
}

module.exports = Page