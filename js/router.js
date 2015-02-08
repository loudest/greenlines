define([
  'jquery',
  'underscore',
  'backbone',
  'views/map',
  'views/menu'
], function($, _, Backbone, MapView, MenuView) {
  var AppRouter = Backbone.Router.extend({
    views: [],
    routes: {
      '': 'initialize'
    },
    el: '#appView',
    
    'initialize': function(){
      this.views.push(new MapView());
      this.views.push(new MenuView());
    }
  });

  return AppRouter;
})
