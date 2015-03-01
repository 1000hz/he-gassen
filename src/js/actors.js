var bound = require('./util/bound')

var actors = [
  {
    el: '.page-title',
    easing: 'easeInOutQuad',
    keyframes: {
      0: { transform: 'translate3d(0, 0vh, 0)   scale3d(1, 1, 1)',       opacity: '1'   },
      1: { transform: 'translate3d(0, -14vh, 0) scale3d(0.65, 0.65, 1)', opacity: '0.7' },
    }
  },
  {
    el: '.hegassen',
    keyframes: function (page) {
      var x = -page.scrollWidth
      return {
          0: { transform: 'translate3d(' + x + 'px, 0, 0)' },
        100: { transform: 'translate3d(0px, 0, 0)' }
      }
    }
  }
]

module.exports = actors