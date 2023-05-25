const router = require('express').Router();
const { jwtCheck } = require('../middleware/auth');
const { getAll, createPost } = require('../models/postModel');


router.get('/', getAll);
router.post('/', jwtCheck, createPost);

module.exports = router;