define([
  'jquery',
  'underscore',
  'backbone',
  'views/map'
], function($, _, Backbone, MapView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'initalize'
    },

    'initalize': function(){
      var mapView = new MapView();
      mapView.render();
    }
  });

  return AppRouter;
})
