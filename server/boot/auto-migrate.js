module.exports = function (app) {
  app.dataSources.mysqlDs.automigrate();
};
