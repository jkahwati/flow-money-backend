var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

// /*Security dependencies*/
// const helmet = require('helmet');
// const csp = require('content-security-policy');
// const hidePoweredBy = require('hide-powered-by');
// const hpp = require('hpp');
// const cors = require('cors')
// const globalCSP = csp.getCSP(csp.STARTER_OPTIONS);
// app.use(globalCSP);
// app.use(helmet());
// app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
// app.use(hidePoweredBy());
// app.use(hpp());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({strict:false,extended: true}));
// app.use(cors({origin: 'segurosfalabella.com'}))
// app.disable('x-powered-by');
// /* Security dependencies end*/

/* Error handler*/
const jsonErrorHandler = async (err, req, res, next) => {
  console.log("JsonErrorHandler:",JSON.stringify(err))
  var status = err.status;
  res.status(status).send({message: "Bad request"});
}
app.use(jsonErrorHandler) 
/* Error handler end*/

/* Routes config */
const healthRoute = require('./src/routes/health.routes');
app.use(healthRoute);
/* Routes config end */

app.listen(3000, function () {
  console.log('OFFER-MANAGER is running on port 3000');
});

module.exports = app;
