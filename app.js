const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json()); // idk what this does
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// 2020 pages
app.use('/', require('./routes')); // index
app.use('/', require('./routes/gallery')); // gallery

// 2019 main pages
app.use('/2019', require('./routes/2019/index')); 
app.use('/2019/about', require('./routes/2019/about')); 
app.use('/2019/get-involved', require('./routes/2019/get-involved')); 
app.use('/2019/contact', require('./routes/2019/contact')); 
app.use('/2019/faq', require('./routes/2019/faq')); 
app.use('/2019/resources', require('./routes/2019/resources')); 
app.use('/2019/schedule', require('./routes/2019/schedule')); 
app.use('/2019/travel', require('./routes/2019/travel')); 
app.use('/2019/tutorials', require('./routes/2019/tutorials')); 
app.use('/2019/workshops', require('./routes/2019/workshops')); 
// 2019 live pages
app.use('/2019/live/companies', require('./routes/2019/liveCompanies')); 
app.use('/2019/live/faq', require('./routes/2019/liveFaq')); 
app.use('/2019/live/', require('./routes/2019/liveIndex')); 
app.use('/2019/live/maps', require('./routes/2019/liveMaps')); 
app.use('/2019/live/mentor-request', require('./routes/2019/liveMentor-requests')); 
app.use('/2019/live/prizes', require('./routes/2019/livePrizes')); 
app.use('/2019/live/schedule', require('./routes/2019/liveSchedule')); 
// shehacks 2018 pages
app.use('/shehacks', require('./routes/shehacks/index')); 
app.use('/shehacks/challenges', require('./routes/shehacks/challenges')); 
app.use('/shehacks/logistics', require('./routes/shehacks/logistics')); 
app.use('/shehacks/resources', require('./routes/shehacks/resources')); 
// shehacks 2018 dayof pages
app.use('/shehacks/dayof/companies', require('./routes/shehacks/dayOfCompanies')); 
app.use('/shehacks/dayof/faq', require('./routes/shehacks/dayOfFaq')); 
app.use('/shehacks/dayof/', require('./routes/shehacks/dayOfIndex')); 
app.use('/shehacks/dayof/map', require('./routes/shehacks/dayOfMap')); 
app.use('/shehacks/dayof/prizes', require('./routes/shehacks/dayOfPrizes')); 
app.use('/shehacks/dayof/schedule', require('./routes/shehacks/dayOfSchedule')); 
app.use('/shehacks/dayof/workshops', require('./routes/shehacks/dayOfWorkshops')); 


app.listen(PORT, function () {
    console.log('Listening...');
})

app.use((req, res) => {
    res.status(404)
        .send('Error 404: Unknown Request');
});

module.exports = app;

