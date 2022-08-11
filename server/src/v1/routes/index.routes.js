const express = require('express');
const router = express.Router();

router.use('/v1',require('./users.routes'));
router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
});
module.exports = router;