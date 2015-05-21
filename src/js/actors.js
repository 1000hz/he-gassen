var bound = require('./util/bound')

var actors = [
  {
    el: '.page-title',
    easing: 'easeInOutQuad',
    keyframes: {
      0: { transform: 'translate3d(0, 0vh, 0)   scale3d(1, 1, 1)'      },
      1: { transform: 'translate3d(0, -14vh, 0) scale3d(0.65, 0.65, 1)'},
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
  },
  {
    el: '.yo',
    easing: 'easeInOutQuad',
    keyframes: {
      0.3: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, -4deg)',
        opacity: 0
      },
      0.9: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -8deg)',
        opacity: 1
      },
      2.0: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -10deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.hehe',
    easing: 'easeInOutQuad',
    keyframes: {
      0.7: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      1.3: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      2.6: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.dem-boys',
    easing: 'easeInOutQuad',
    keyframes: {
      1.2: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      1.8: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      3: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.neigh',
    easing: 'easeInOutQuad',
    keyframes: {
      1.8: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      2.3: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      3.7: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.dank',
    easing: 'easeInOutQuad',
    keyframes: {
      2.8: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      3.3: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      4.7: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.weed-shirt',
    easing: 'easeInOutQuad',
    keyframes: {
      4.3: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      5.3: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      5.7: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.s-420',
    easing: 'easeInOutQuad',
    keyframes: {
      5: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      5.6: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      6.3: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.caught-a-body',
    easing: 'easeInOutQuad',
    keyframes: {
      8.3: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      8.9: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      9.6: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.week-ago-1',
    easing: 'easeInOutQuad',
    keyframes: {
      9: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      9.6: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      10.2: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.week-ago-2',
    easing: 'easeInOutQuad',
    keyframes: {
      9: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      9.6: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      10.2: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.week-ago-3',
    easing: 'easeInOutQuad',
    keyframes: {
      9: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      9.6: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      10.2: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.tite-1',
    easing: 'easeInOutQuad',
    keyframes: {
      62: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      63: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      63.3: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.tite-2',
    easing: 'easeInOutQuad',
    keyframes: {
      62.2: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, -4deg)',
        opacity: 0
      },
      63.2: {
        transform: 'translate3d(-10px, -10px, 0) rotate3d(0,0,1, 2deg)',
        opacity: 1
      },
      63.5: {
        transform: 'translate3d(-12px, -12px, 0) rotate3d(0,0,1, 5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.tite-3',
    easing: 'easeInOutQuad',
    keyframes: {
      62.7: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      63.7: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      64: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.tite-4',
    easing: 'easeInOutQuad',
    keyframes: {
      63.1: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, -4deg)',
        opacity: 0
      },
      64.0: {
        transform: 'translate3d(-10px, -10px, 0) rotate3d(0,0,1, 2deg)',
        opacity: 1
      },
      64.3: {
        transform: 'translate3d(-12px, -12px, 0) rotate3d(0,0,1, 5deg)',
        opacity: 0
      }
    }
  },
  {
    el: '.tite-5',
    easing: 'easeInOutQuad',
    keyframes: {
      63.7: {
        transform: 'translate3d(0px, 0px, 0) rotate3d(0,0,1, 4deg)',
        opacity: 0
      },
      64.7: {
        transform: 'translate3d(10px, -10px, 0) rotate3d(0,0,1, -2deg)',
        opacity: 1
      },
      64.9: {
        transform: 'translate3d(12px, -12px, 0) rotate3d(0,0,1, -5deg)',
        opacity: 0
      }
    }
  },
]

module.exports = actors