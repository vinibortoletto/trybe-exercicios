const express = require('express');
require('express-async-errors');

const middleware = require('./middleware');
const activitiesRouter = require('./routers/activitiesRouter');

const app = express();
app.use(express.json());

app.use('/activities', activitiesRouter);

module.exports = { app };
