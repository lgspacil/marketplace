// import { request } from "http";

//came here after being sent from the routes.js section
var express = require("express");
var mongoose = require('mongoose');
var app = express();

//since we have the animal model we need to set Aniaml as a variable
var Item = mongoose.model('Item');

module.exports = {

    add_item: function (req, res) {
        var item = new Item(req.body);
        item.save(function (err){
            if(err){
                console.log("there was an error adding the item");
            } else {
                console.log('added the item');
            }
        });

        return res.json(true);
    },

    get_cards: function(req, res) {
        Item.find({}, function(err, result){
            if(err){console.log("error when grabbing all the trips")}
            else{res.json(result)}
        })
    },

    add_like: function(req, res) {
        Item.update({_id: req.body._id},{ $inc: { 'likes': 1 } }, function(err, result){
            if(err){console.log("there was an error when updating")}
            else{res.json(result);}
        })
    },

    delete_this: function(req, res) {
        Item.remove({_id: req.body._id}, function(err, result){
            if(err){console.log("there was an error removing item")}
            else{res.json(true)}
        })
    },

    search_one: function(req, res) {
        console.log("^^^^^^^^^^^", req.body);
        Item.find({item_name: req.body.letters}, function(err, result){
            if(err){console.log("there was an error searhcin for things")}
            else{res.json(result);}
        })
    }
}





