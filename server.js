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
const loginRoute = require('./src/routes/login.routes');
const userRoute = require('./src/routes/user.routes');
const transactionRoute = require('./src/routes/transaction.routes');
const mongo = require('mongodb');
app.use(healthRoute);
app.use(loginRoute);
app.use(userRoute);
app.use(transactionRoute);
/* Routes config end */

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jekahwati:nbC4Po9CMPxwLvu2@flow-money-cluster.tbmar.mongodb.net/flow-money-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MONGO IS CONNECTED")
});

app.listen(process.env.PORT  || 3001, function () {
  console.log('FLOW-MONEY is running on port 3001');
});

module.exports = app;
