define([
  'jquery',
  'underscore',
  'backbone',
  'router',
], function($, _, Backbone, Router){
  var initialize = function(){
    var router = new Router();
    Backbone.history.start();
    router.navigate("", {trigger: true});
  }
  return {
    initialize: initialize
  }
});
