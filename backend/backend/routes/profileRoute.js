// routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const upload = require('../multerConfig.js');

// POST: Create a new profile with an image
router.post('/saveUser',upload.fields([{ name: 'documentFrontFile', maxCount: 1 }, { name: 'documentBackFile', maxCount: 1 }]), profileController.createProfile);
router.post('/verifyotp', profileController.verifyOtp)

// PUT: Update a profile by ID with an image
router.put('/updateUser/:email',upload.fields([{ name: 'profilePic', maxCount: 1 },{ name: 'documentFront', maxCount: 1 }, { name: 'documentBack', maxCount: 1 },{ name: 'nomineeDocumentFront', maxCount: 1 }, { name: 'nomineeDocumentBack', maxCount: 1 }]), profileController.updateProfile);

// Other routes
router.put('/updatepassword/:email',profileController.updatePassword)
router.post('/clienlogin',profileController.clientLogin)
router.post('/clienVerify',profileController.verifyClient)

router.get('/getUser/', profileController.getAllProfiles);
router.get('/getUserById/:id', profileController.getProfileById);
router.delete('/deleteUser/:id', profileController.deleteProfile);
// router.post('/runupdate', profileController.runUpdate);

module.exports = router;
