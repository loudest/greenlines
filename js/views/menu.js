define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/menu/menu.html',
  'bootstrap'
], function($, _, Backbone, MenuTemplate){
  var menuView = Backbone.View.extend({
    events: {
      'click .start': 'initWizard'
    },

    tagName: 'nav',
    className: 'navbar navbar-default',
  
    initialize: function(){
      this.render();
    },

    render: function(){
      var compiled = _.template(MenuTemplate);
      var template = compiled();
      $('body').append(template);
    }
  });

  return menuView;
});
