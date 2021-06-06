var express = require('express')
var storeCtrl = require('../Controller/storeController')


const router = express.Router();

router.get('/stores' , storeCtrl.getStoreList);
router.post('/store/save' , storeCtrl.saveStore);

module.exports = router ;