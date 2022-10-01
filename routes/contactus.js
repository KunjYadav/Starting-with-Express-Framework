const path = require('path');

const express = require('express');

const contactsController = require('../controllers/contacts');

const router = express.Router();

router.get('/contactus', contactsController.getAddContact);

router.post('/contactus', contactsController.postAddContact);

module.exports = router;