const mongoose = require('mongoose');
const dbRoute = process.env.DB_ROUTE;
module.exports = () => {
  function connect() {
    mongoose.connect(dbRoute, { useNewUrlParser: true }, function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  require('./schema/user.js'); // user.js는 나중에 만듭니다.
};