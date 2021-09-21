/*
Project : Cryptotrades
FileName : userModel.js
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the file which used to define user collection that will communicate and process user information with mongodb through mongoose ODM.
*/

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
var uniqueValidator = require('mongoose-unique-validator');
var config = require('./../../../helper/config')



// Setup schema
var userSchema = mongoose.Schema({
    username: {
        type: String,
        maxlength: [32, "User Name can't exceed 32 characters"],
        unique: [ true , 'Username already exists. Please try a different Username']
    },
    email: {
        type: String
    },
    account: {
        type: String,
    },     
    phone: {
        type: String,
    },
    profile_image: String,    
    profile_cover: String,
    website_url: String,            
    twitter_info: String,
    telegram_info: String,
    role: {type:Number, default:2},
    is_notification: {type:Number, default:1},
    is_featured: {type:Number, default:0},
    status:{
        type: String,
        enum : ['active','inactive','blocked','reset']
    },
    device_info:{
        type: Map,
        of: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('users', userSchema,config.db.prefix+'users');