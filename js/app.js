define([
  'jquery',
  'underscore',
  'backbone',
  'router',
], function($, _, Backbone, Router){
  var initialize = function(){
    var router = new Router();
    router.initialize();
    Backbone.history.start();
  }

  return {
    initialize: initialize
  };
});
