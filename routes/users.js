const express = require('express');
const { getAllUser, createUser } = require('../controllers/userControllers');


//init router
const router = express.Router();

// users router

router.get('/', getAllUser)
router.post('/', createUser)






//exporting router
module.exports = router;