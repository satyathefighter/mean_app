const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean_app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const monDb = mongoose.connection;
monDb.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that', 'mongodb://localhost:27017/mean_app', 'is running.');
});