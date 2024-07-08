const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const adminController = require('../controllers/adminController');

// Fetch all users
router.get('/users', [authMiddleware, adminMiddleware], adminController.getUsers);

// Delete a user
router.delete('/users/:id', [authMiddleware, adminMiddleware], adminController.deleteUser);

module.exports = router;
