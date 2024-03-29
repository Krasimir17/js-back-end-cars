// [x] initialize and configure Express app
// [x] initialize templating lib
// [x] create home controller
// [x] bind routing
// [x] create layout
// - [x] read all
// - [x] read one by Id
// - [x] create
// - [ ] edit
// - [ ] delete
// - [ ] search
// [ ] create data service
// [ ] implement controllers
// - [x] home (catalog)
// - [x] about
// - [x] details
// - [ ] create

const express = require('express');
const hbs = require('express-handlebars');
const { about } = require('./controllers/about');
const create = require('./controllers/create');
const { details } = require('./controllers/details');
const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');

const carsService = require('./services/cars.js');

const app = express();

app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.use(carsService());

app.get('/', home);
app.get('/about', about);
app.get('/details/:id', details);

// app.route('/create', create.get);
// app.route('/create', create.post);
app.route('/create').get(create.get).post(create.post);

app.all('*', notFound);

app.listen(3000, () => console.log('Server started'));