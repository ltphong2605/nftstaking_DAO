/*
Project : Cryptotrades
FileName : route.js
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the file which used to define all route releated to category api request.
*/

var express = require('express')
var router = express.Router();
var voteController = require("../controller/voteController")
var adminauth = require("../../../middleware/adminauth");
const { check } = require('express-validator');

router.get('/list',voteController.getList)
router.get('/detail',voteController.details);
router.get('/fulllist',adminauth,voteController.getAdminList)
router.post('/add',[check('title').not().isEmpty(), check('status').not().isEmpty(),check('category_image').not().isEmpty(),adminauth],voteController.add)
router.put('/edit',[check('category_id').not().isEmpty(),adminauth],voteController.edit)
router.delete('/delete',[check('category_id').not().isEmpty(),adminauth],voteController.delete)
module.exports = router