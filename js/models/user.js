define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var userModel = Backbone.Model.extend({
    defaults: {
      income: 0,
      incomeUnits: 'hourly',
      address: '',
      dependants: 0
    }
  })
  return userModel;
})
