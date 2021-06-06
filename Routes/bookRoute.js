var express = require('express')
var bookCtrl = require('../Controller/bookController')


const router = express.Router();

router.get('/books' , bookCtrl.getBooksList);
router.post('/books/save' , bookCtrl.saveBook);

module.exports = router ;