define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var URLROOT = "" // ?
  var userModel = Backbone.Model.extend({
    urlRoot : URLROOT,
    url : function () {
      return this.urlRoot + "?"+this.income
    }
    defaults: {
      income:15,
      incomeUnits: 'hourly',
      address: '',
      dependants: 0,
      geoJson: []
    },
    initialize: function(){
      this.on("change:income",function(user){
        user.fetch({
        success: function (model, geoJSON) {
            var layer = new ol.layer.Vector({
   title: 'Earthquakes',
   source: new ol.source.GeoJSON({
    url: 'data/layers/7day-M2.5.json'
  }),
  style: new ol.style.Style({
    image: new ol.style.Circle({
      radius: 3,
      fill: new ol.style.Fill({color: 'white'})
    })
  })
})
            
        }
    })
      })
    }
  })
  return userModel;
})
