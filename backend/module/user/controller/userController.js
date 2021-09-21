/*
Project : Cryptotrades
FileName : userController.js
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the file which used to define all user related api function.
*/

var users = require('./../model/userModel')
var jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
var randomstring = require("randomstring");
var bcrypt = require('bcrypt');
var validator = require('validator');
var config = require('./../../../helper/config')
var moment = require('moment');
var mailer = require('./../../common/controller/mailController'); 
var media = require('./../../media/controller/mediaController'); 
var cp = require('child_process');
const crypto = require('crypto');
const { random } = require('lodash');

/**************************************************************
*  This is the function which used to create new user and login.
**************************************************************/
exports.login = function(req,res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({
            status: false,
            message: "Request failed",
            errors:errors.array()
        });
        return;
    }  
    
    this.checkUserExist(req,res, function(result) {
        if(result) {
            this.registerUser(req, res);
        } else {
            params = {account:req.body.user_account};
            this.getToken(params,req,res);
        }
    })
}

/*****************************************************
 *   This is the function handle user registration
 *****************************************************/
registerUser = function (req, res) { 
    var user = new users();
    user.username = req.body.username ? req.body.username : "";
    user.email = req.body.email ? req.body.email : "";
    user.account = req.body.user_account ? req.body.user_account : "";
    user.phone = req.body.phone ? req.body.phone : "";
    user.profile_image = req.body.profile_image ? req.body.profile_image : "";
    user.profile_cover = req.body.profile_cover? req.body.profile_cover : "";
    user.website_url = req.body.website_url ? req.body.website_url : "";
    user.twitter_info = req.body.twitter_info ? req.body.twitter_info : "";
    user.telegram_info = req.body.telegram_info ? req.body.telegram_info : "";
    user.role = 2;
    user.status = 'active';

    user.save(function (err , user) {
        if (err) {
            res.json({
                status: false,
                message: "Request failed",
                errors:err
            });
            return;
        } 
        let token = jwt.sign({user_id:user._id,username: user.username,email: user.email,phone:user.phone,profile_image:user.profile_image,profile_cover:user.profile_cover,status:user.status,website_url:user.website_url,twitter_info:user.twitter_info,telegram_info:user.telegram_info, role:user.role,account:user.account},
        config.secret_key,
        { expiresIn: '24h' // expires in 24 hours
        }
        );
            
        res.json({
            status: true,
            token:token,
            message:"Registration successful",
        });
    });
}

/**********************************************************
*  This function used to find whether user name exist or not
***********************************************************/
checkUserExist = function (req,res,callback) {
    if(req.body.user_account) {
        users.find({'account':req.body.user_account},function(err,data) {
            if(err) {
                res.json({
                    status: false,
                    message: "Request failed",
                    errors:err
                });
                return;
            }

            if(data.length>0) {
                callback(false)
            } else {
                callback(true)
            }
        })
    } else {
        res.json({
            status: false,
            message: "User account is required",
            errors:"User account is required"
        });
        return;
    }
}

/************************************************************
 * This is the function which used to process getting token
 ***********************************************************/
getToken = function(params,req,res) {
    users.findOne(params, function (err, user) {
        if (err) {
            res.json({
                status: false,
                message: "Request failed",
                errors:err
            });
            return;
        }
        if(this.isEmptyObject(user)) {
            res.json({
                status: false,
                message: "User not found",
            });
            return;
        } 
        let token = jwt.sign({user_id:user._id,username: user.username,email: user.email,phone:user.phone,profile_image:user.profile_image,profile_cover:user.profile_cover,status:user.status,website_url:user.website_url,twitter_info:user.twitter_info,telegram_info:user.telegram_info, role:user.role,account:user.account},
        config.secret_key,
        { expiresIn: '24h' // expires in 24 hours
        }
        );
        res.json({
            status: true,
            token:token,
            message:"login successful",
        }); 
    });
}

/*****************************************************************************
*  This is the function which used to find user password if user forgot password
******************************************************************************/
exports.UpdateImageInfo = function(req,res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({
            status: false,
            message: "Request failed",
            errors:errors.array()
        });
        return;
    }
    let params =  {account:req.body.account}
    users.findOne(params, function (err, user) {
        if (err) {
            res.json({
                status: false,
                message: "Request failed",
                errors:err
            });
            return;
        }
        if(this.isEmptyObject(user)) {
            res.json({
                status: false,
                message:"User not found"
            });
            return;
        }  
        if(user.status == "inactive") {
            res.json({
                status: false,
                message:"Your account has been inactive. Contact admin to activate your account"
            });
            return;
        }
        if(user.status == "blocked") {
            res.json({
                status: false,
                message:"Your account has been blocked. Contact admin to unblock your account"
            });
            return;
        }

        let update_info = {};
        if(req.body.profile_image){
            user.profile_image = req.body.profile_image;
            update_info = {
                'profile_image': user.profile_image,
                'status': 'active'
            }
        } else if(req.body.profile_cover){
            user.profile_cover = req.body.profile_cover;
            update_info = {
                'profile_cover': user.profile_cover,
                'status': 'active'
            }
        }
        
        users.updateMany({_id: user._id}, {'$set': update_info}, function(err) {
            if (err) {
                res.json({
                    status: false,
                    message: "Request failed",
                    errors:err
                });
                return
            }    
            let token = jwt.sign({user_id:user._id,username: user.username,email: user.email,phone:user.phone,profile_image:user.profile_image,profile_cover:user.profile_cover,status:user.status,website_url:user.website_url,twitter_info:user.twitter_info,telegram_info:user.telegram_info, role:user.role,account:user.account},
            config.secret_key,
            { expiresIn: '24h' // expires in 24 hours
            }
            );
            res.json({
                status: true,
                token:token,
                message:"profile updated",
            });
        });
    })
}

/*********************************************************
*  This is the function which used to update user profile
**********************************************************/
exports.update = function(req,res) {

    users.findOne({_id:req.decoded.user_id}, function (err, user) {
        if (err) {
            res.json({
                status: false,
                message: "Request failed",
                errors:err
            });
            return;
        }
        if(this.isEmptyObject(user)) {
            res.json({
                status: false,
                message:"User not found"
            });
            return;
        }
        if(user.status == 'inactive') {
            res.json({
                status: false,
                message:"Your account has been inactive. Contact admin to activate your account"
            });
            return;
        }
        if(user.status == 'blocked') {
            res.json({
                status: false,
                message:"Your account has been blocked. Contact admin to activate your account"
            });
            return;
        } 
        
        user.username = req.body.username ? req.body.username : user.username;
        user.email = req.body.email ? req.body.email : user.email;
        user.website_url = req.body.website_url ? req.body.website_url : user.website_url;
        user.twitter_info = req.body.twitter_info ? req.body.twitter_info : user.twitter_info;            
        user.telegram_info = req.body.telegram_info ? req.body.telegram_info : user.telegram_info;
        user.phone = req.body.phone ? req.body.phone : user.phone;
        
        user.modified_date = moment().format();
        // save the user and check for errors
        let params ={
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'phone': user.phone,
            'paypal': user.paypal
        };
        
        users.updateMany({_id: user._id}, {'$set': params}, function(err) {
            if (err) {
                let w_err = "Request failed";
                if(err.errors.username) {
                    w_err = 'Metadata already Exist'
                }
                res.json({
                    status: false,
                    message: w_err,
                    errors:err
                });
                return
            }    
            let token = jwt.sign({user_id:user._id,username: user.username,email: user.email,phone:user.phone,profile_image:user.profile_image,profile_cover:user.profile_cover,status:user.status,website_url:user.website_url,twitter_info:user.twitter_info,telegram_info:user.telegram_info, role:user.role,account:user.account},
                config.secret_key,
                { expiresIn: '24h' // expires in 24 hours
                }
                );
            res.json({
                status: true,
                token:token,
                message:"User info updated",
            });
            return;
        });
    });
}

/******************************************************
 *   This is the function check object is empty or not
 *****************************************************/
isEmptyObject = function (obj) {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
}
