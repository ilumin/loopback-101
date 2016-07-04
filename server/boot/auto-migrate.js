module.exports = function (app) {
  app.dataSources.mysqlDs.automigrate('CoffeeShop', function (err) {
    if (err) {
      throw err;
    }

    app.models.CoffeeShop.create([
      { name: 'Bel Cafe', city: 'Vancouver' },
      { name: 'Three Bees Coffee House', city: 'San Mateo' },
      { name: 'Caffee Artigiano', city: 'Vancouver' }
    ], function (err, shops) {
      if (err) {
        throw err;
      }

      console.log('Models created: \n', shops);
    });
  });
};
