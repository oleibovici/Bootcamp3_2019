/* This file is your server router. 
   Trace the dependencies so you understand which files are connected and how data is passed between them
   For each route, make note of the sequence of requests called for each
*/

/* Dependencies */
var listings = require('../controllers/listings.server.controller.js'), 
    getCoordinates = require('../controllers/coordinates.server.controller.js'),
    express = require('express'), //refers to Express the middleware helper for Node.js
    router = express.Router(); //refers to the Router() function in Express the middleware helper for Node.js

router.route('/')
  .get(listings.list)
  .post(getCoordinates, listings.create);

router.route('/api/listings')
  .get(listings.list);

router.route('/:listingId')
  .get(listings.read)
  .put(getCoordinates, listings.update)
  .delete(listings.delete);

router.param('listingId', listings.listingByID);

module.exports = router;