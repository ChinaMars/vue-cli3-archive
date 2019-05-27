module.exports = {
  "plugins": {
    "autoprefixer": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-px-to-viewport": {
      "viewportWidth": 750,
      "viewportHeight": 1334,
      "unitPrecision": 3,
      "viewportUnit": "vw",
      "selectorBlackList": [
        ".ignore",
        ".hairlines"
      ],
      "minPixelValue": 1,
      "mediaQuery": false
    }
  }
}