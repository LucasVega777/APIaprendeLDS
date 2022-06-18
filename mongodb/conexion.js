const mongoose = require('mongoose');

const urlConexion = process.env.MONGO_URL.replace('[USERNAME]', process.env.MONGO_USERNAME).replace('[PASSWORD]', process.env.MONGO_PASSWORD);

mongoose.connect(urlConexion);

module.exports = mongoose;