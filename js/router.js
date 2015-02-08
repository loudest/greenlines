define([
  'jquery',
  'underscore',
  'backbone',
  'views/map',
  'views/menu',
  'models/user'
], function($, _, Backbone, MapView, MenuView, UserModel) {
  var AppRouter = Backbone.Router.extend({
    views: [],
    el: '#appView',
    routes: {'': 'initialize'},        
    initialize: function(){
      var model = new UserModel();
      this.views.push(new MenuView(model));
      this.views.push(new MapView(model));
    }
  });

  return AppRouter;
})
