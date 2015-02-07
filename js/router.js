define([
  'jquery',
  'underscore',
  'backbone',
  'views/map',
  'views/menu'
], function($, _, Backbone, MapView, MenuView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'initialize'
    },
    el: '#appView',

    'initialize': function(){
      var mapView = new MapView();
      var menuView = new MenuView();
    }
  });

  return AppRouter;
})
