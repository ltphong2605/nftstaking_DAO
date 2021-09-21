/*
Project : DAO
FileName : route.js
Author : Valdy
File Created : 10/03/2022
CopyRights : Vlady
Purpose : This is the file which used to define all route releated to user api request.
*/

var express = require('express')
var router = express.Router();
var userController = require("./../controller/userController")
const { check } = require('express-validator');
var auth = require("./../../../middleware/auth");
var adminauth = require("./../../../middleware/adminauth");

router.post('/login',[check('user_account').not().isEmpty()],userController.login)

router.post('/update_profile_image_info', [check('account').not().isEmpty(), check('profile_image').not().isEmpty()], userController.UpdateImageInfo)

router.post('/update_profile_cover_info', [check('account').not().isEmpty(), check('profile_cover').not().isEmpty()], userController.UpdateImageInfo)

router.post('/update',[check('username').not().isEmpty()], [auth], userController.update)

module.exports = router