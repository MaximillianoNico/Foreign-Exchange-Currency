// / const config = require('./app/config')

module.exports = {
    "presets": [
      "next/babel"
    ],
    "plugins": [
      ["babel-plugin-root-import"],
      // ["transform-remove-console"],
      [ "inline-react-svg" ]
    ],
    "env": {
      "development": {
        "plugins": ["inline-dotenv", "dynamic-import-node"],
        "presets": [["next/babel", { "preset-env": { "modules": "commonjs" } }]]
      },
      "production": {
        "plugins": [["transform-inline-environment-variables"],["transform-remove-console"]]
      },
      "test": {
        "presets": [["next/babel", { "preset-env": { "modules": "commonjs" } }]]
      }
    }
  }
  