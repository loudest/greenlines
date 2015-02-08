define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/menu/menu.html',
  'models/user',
  'bootstrap',
  'jqueryui/slider'
], function($, _, Backbone, MenuTemplate, UserModel){
  var menuView = Backbone.View.extend({
    events: {
      'keyup input': 'update',
      'click .submit': 'fetchGeoData'
    },

    tagName: 'nav',
    className: 'navbar navbar-default',
  
    initialize: function(){
      var userModel = new UserModel();
      this.model = userModel;
      this.on('render', this.sliderInit);
      this.render();
    },

    update: function(){
      var income = this.$('input').val();
      this.model.set('income', income);
    },

    fetchGeoData: function(){
      this.model.fetch({
        success: _.bind(function(model){
          
          }, this)
        }
    }

    render: function(){
      var compiled = _.template(MenuTemplate);
      var template = compiled();
      $('body').append(template);
      this.trigger('render');
    },

    sliderInit: function(){
     this.$('.slider').slider({
      min: 5,
      max: 50,
      step: 0.1,
      value: 15,
      slide: _.bind(function(e, ui){
         this.$('.tool-tip').text(
            ui.value.toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2
              }
            )
          )
      }, this),
      stop: _.bind(function(e, ui) {
        this.model.set('wage', ui.value);
      }, this)
      })
    }
  });

  return menuView;
});
