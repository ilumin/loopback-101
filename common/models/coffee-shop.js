module.exports = function(CoffeeShop) {
  CoffeeShop.status = function(callback) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;

    console.log('Current hour is ' + currentHour);

    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    }
    else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }

    callback(null, response);
  };

  CoffeeShop.remoteMethod('status', {
    http: { path: '/status', verb: 'get' },
    returns: { arg: 'status', type: 'string' }
  });

  CoffeeShop.getName = function(id, callback) {
    CoffeeShop.findById(id, function(erro ,shop) {
      response = shop.name;
      callback(null, response);
    });
  };

  CoffeeShop.remoteMethod('getName', {
    http: { path: '/get-name', verb: 'get' },
    accepts: { arg: 'id', type: 'number', http: { source: 'query' } },
    returns: { arg: 'name', type: 'string' }
  });
};
