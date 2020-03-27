const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kushalshah/Documents/connector-community-app/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kushalshah/Documents/connector-community-app/src/pages/index.js"))),
  "component---src-pages-profile-js": hot(preferDefault(require("/Users/kushalshah/Documents/connector-community-app/src/pages/profile.js")))
}

