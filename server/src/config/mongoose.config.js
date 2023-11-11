"use strict";
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sunsetdaydreamsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Established connection to database'))
    .catch(err => console.log('Something went wrong when connecting to database', err));
