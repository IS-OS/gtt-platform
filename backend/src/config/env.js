require('dotenv').config();

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    CORELOGIC_API_KEY: process.env.CORELOGIC_API_KEY,
    STOBOX_API_KEY: process.env.STOBOX_API_KEY,
    TAXBIT_API_KEY: process.env.TAXBIT_API_KEY,
    CICA_API_KEY: process.env.CICA_API_KEY
};