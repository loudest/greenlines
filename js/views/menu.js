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
      'click .submit': 'fetchGeoData',
      'keyup input': 'update',
      'change input': 'update'
    },
    el: 'body',
    tagName: 'nav',
    className: 'navbar navbar-default',
  
    initialize: function(model){
      this.model = model;
      this.on('render', this.sliderInit);
      this.render();
    },

    update: function(e){
      var income = this.$('input').val();
      this.model.set({'income': income});
    },

    fetchGeoData: function(e){
      e.preventDefault();
      var income = parseFloat(this.model.get('income'));
      if (_.isNumber(income)){
        var wage = this.model.get('income');
        $.get('https://greenliners-api.herokuapp.com/?wage=' + wage, _.bind(function(data){
          this.model.set({'geoJson': data});
          console.log(this.model.get('geoJson'));
        }, this));
      } else {
        alert("Enter a number for the wage field!");
      }
    },

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
          this.$('input').val(ui.value);
          this.update();
      }, this),
      stop: _.bind(function(e, ui) {
        this.model.set('wage', ui.value);
      }, this)
      })
    }
  });

  return menuView;
});
