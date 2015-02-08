define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var URLROOT = "https://greenliners-api.herokuapp.com" // ?
  var userModel = Backbone.Model.extend({
    urlRoot : URLROOT,
    url : function () {
      return this.urlRoot + "/?wage=" + this.income
    }
    defaults: {
      income: 15,
      incomeUnits: 'hourly',
      address: '',
      dependants: 0,
      geoJson: []
    },

    initialize: function(){
      this.on("change:income",function(user){
         user.fetch({
            success: function (model, geoJSON) {
            // ol api calls go here
         }
         })
      })
    },

    convertToHourly: function(amt){
      if (this.incomeUnits === 'annually'){
        
      } else {
        this.income
      }
    }
  })
    
  return userModel;
})
