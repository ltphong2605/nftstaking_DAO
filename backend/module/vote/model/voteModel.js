/*
Project : DAO
FileName : voteModel.js
Author : Vlady
File Created : 12/03/2021
CopyRights : Vlayd
Purpose : This is the file which used to define vote collection that will communicate and process category information with mongodb through mongoose ODM.
*/

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
var uniqueValidator = require('mongoose-unique-validator');
var config = require('../../../helper/config')

// Setup schema
var voteSchema = mongoose.Schema({
    title: {
        type: String,
        minlength: [3, 'Title must be 3 characters or more'],
        maxlength: [255, "Title can't exceed 255 characters"],
        required: [ true , 'Title is required'], 
    },    
    category_image: {
        type: String,
        required: [ true , 'Image is required'], 
    },
    status:{
        type: String,
        enum : ['active','inactive'],
        default: 'active'
    },
    create_date: {
        type: Date,
        default: Date.now
    },
});

voteSchema.plugin(uniqueValidator);
voteSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('vote', voteSchema,config.db.prefix+'vote');