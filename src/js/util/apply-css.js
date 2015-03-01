var prefix = require('./css-prefixer')

function css(el, styles) {
  for (var property in styles) {
    el.style[prefix(property)] = styles[property]
  }
}

module.exports = css