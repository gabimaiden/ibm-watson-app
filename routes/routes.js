const express = require('express');
const router = express.Router();

const pingController = require('../controllers/pingController')

router.get('/ping', pingController.getPing);

router.post('/watson/assistant/message', (request, response) => {
    response.send({message: 'watson/assistant/message'});
});

module.exports = router;