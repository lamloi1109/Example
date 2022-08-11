require('dotenv').config();
const app = require('./src/app');
const {PORT} = process.env || 5000;
app.listen( PORT, () => {
    console.log(`WSV start with port ${PORT}`);
})
