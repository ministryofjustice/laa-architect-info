
// core dependencies
const url = require('url')

// local dependencies
const config = require('../app/config.json')
const encrypt = require('./encrypt')
const configPassword = process.env.PASSWORD;

// Local variables
const allowedPathsWhenUnauthenticated = [
  '/slack/actions',
  '/manage-prototype/password',
  '/public/stylesheets/unbranded.css',
  '/plugin-assets/govuk-prototype-kit/lib/assets/images/unbranded.ico',
  '/plugin-assets/govuk-frontend/govuk/all.js',
  // Keep /extension-assets path for backwards compatibility
  // TODO: remove in v14
  '/extension-assets/govuk-prototype-kit/lib/assets/images/unbranded.ico',
  '/extension-assets/govuk-frontend/govuk/all.js']

function authentication () {
  if (!shouldUseAuth()) {
    // do nothing
    return (req, res, next) => {
      next()
    }
  }

  if (!configPassword) {
    // show errors
    return (req, res) => {
      showNoPasswordError(res)
    }
  }

  // password is encrypted because we store it in a cookie
  // we store the password to compare in case it is changed server-side
  // changing the password should require users to re-authenticate
  const password = encrypt(configPassword)

  return (req, res, next) => {
    if (allowedPathsWhenUnauthenticated.includes(req.path)) {
      next()
    } else if (isAuthenticated(password, req)) {
      next()
    } else {
      sendUserToPasswordPage(req, res)
    }
  }
}

function shouldUseAuth () {
  if (!config.useAuthExceptSlackAPI) {
    return false
  }

  if (process.env.NODE_ENV === 'production') {
    return true
  }

  return false
}

function showNoPasswordError (res) {
  console.error('Password is not set.')
  return res.send('<h1>Error:</h1><p>Password not set. <a href="https://prototype-kit.service.gov.uk/docs/publishing#setting-a-password">See guidance for setting a password</a>.</p>')
}

function sendUserToPasswordPage (req, res) {
  const returnURL = url.format({
    pathname: req.path,
    query: req.query
  })
  const passwordPageURL = url.format({
    pathname: '/manage-prototype/password',
    query: { returnURL }
  })
  res.redirect(passwordPageURL)
}

function isAuthenticated (encryptedPassword, req) {
  return req.cookies.authentication === encryptedPassword
}

module.exports = authentication
