define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var userModel = Backbone.Model.extend({
    urlRoot : function(){
      return "https://greenliners-api.herokuapp.com/?wage=" + this.get('income');
    },

    defaults: {
      income: '15',
      incomeUnits: 'hourly',
      address: '',
      dependants: 0,
      geoJson: []
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
