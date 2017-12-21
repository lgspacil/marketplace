//we need to require the controllers because thats where we will send info after we recieved it in the routes section. 
//creating users locations and trips variables that will handel the logic that is sent to them from the routes

var items = require('../controllers/items.js')
// var locations = require('../controllers/locations.js')
// var trips = require('../controllers/trips.js')

module.exports = function (app){

    app.post('/add_item', function(req, res){
        items.add_item(req, res);
    })

    app.get('/get_cards', function(req, res){
        items.get_cards(req, res);
    })

    app.post('/add_like', function(req, res){
        items.add_like(req, res);
    })

}