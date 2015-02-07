define([
  'jquery',
  'underscore',
  'backbone',
  'views/map'
], function($, _, Backbone, MapView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'initialize'
    },
    el: '#appView',

    'initialize': function(){
      var mapView = new MapView();
    }
  });

  return AppRouter;
})
