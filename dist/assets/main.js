+function () {
  var $hegassen = $('.hegassen')
  var $title    = $('.page-title')

  document.body.style.height = '80000px'

  var WIDTH  = 29288
  var HEIGHT = 959

  var width
  var scrollHeight
  var scrollWidth

  setWidth()
  $(window).on('resize', setWidth)

  function setWidth() {
    width = WIDTH * window.innerHeight / HEIGHT
    scrollHeight = document.body.scrollHeight - window.innerHeight
    scrollWidth  =  width - window.innerWidth
    $hegassen.css({width: width})
  }

  function bound(x, min, max) {
    return x > max ? max
         : x < min ? min
         : x
  }

  var prevPosition  = document.body.scrollTop / scrollHeight;
  var titleKeyframe = 0.006386128676101576

  var render = function () {
    var position   = document.body.scrollTop / scrollHeight
    var translateX = scrollWidth * position - scrollWidth

    translateX = bound(translateX, -scrollWidth, 0).toFixed(3)

    $hegassen.css({
      transform: 'translate3d(' + translateX + 'px, 0, 0)'
    })

    if (prevPosition < titleKeyframe) {
      var boundedPos = bound(position, 0, titleKeyframe) / titleKeyframe
      var translateY = boundedPos * -14
      var scale = 1.5 - boundedPos * 0.5
      $title.css({
        transform: 'translate3d(0, ' + translateY + 'vh, 0) scale3d(' + scale + ', ' + scale + ',1)'
      })
    }

    prevPosition = position
    window.requestAnimationFrame(render)
  }

  render()
}()



