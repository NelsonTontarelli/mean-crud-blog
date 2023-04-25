const mongoose = require('mongoose');
const URI = "mongodb://0.0.0.0/mean-crud";

mongoose.connect(URI)
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));


module.exports = mongoose;