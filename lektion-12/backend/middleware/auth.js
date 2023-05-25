const { auth } = require('express-oauth2-jwt-bearer');


exports.jwtCheck = auth({
  audience: 'https://nissesBlog.com/api',
  issuerBaseURL: 'https://dev-ndzbktxmcu6coux7.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});