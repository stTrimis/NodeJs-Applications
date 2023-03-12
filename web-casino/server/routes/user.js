const express = require('express');
const app = express();
const router = express.Router();
const userController = require('../controllers/userController');
const cors = require('cors');

app.use(cors());

// Routes
router.get('/', userController.view);
router.post('/', userController.find);
router.get('/adduser', userController.form);
router.post('/adduser', userController.create);
router.get('/edituser/:id', userController.edit);
router.post('/edituser/:id', userController.update);
router.get('/viewuser/:id', userController.viewall);
router.get('/label', userController.label);
router.get('/:id',userController.delete);
router.post('/credits/:id', userController.credits)
router.get('/credtis/:id', userController.viewall);
router.get('/public/roullete.html', userController.roullete);
router.get('/label/slotgames', userController.slotgames);
router.get('/back', userController.back);


  
module.exports = router;