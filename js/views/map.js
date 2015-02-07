define([
  'jquery',
  'underscore',
  'backbone',
  'leaflet',
  'text!templates/map/map.html'
], function($, _, Backbone, L, MapTemplate){
  var MapView = Backbone.View.extend({
    el: $('#appView'),
   
    initialize: function(){
      this.on('render', this.afterRender);
      this.render();
    }, 
   
    render: function(){
      var compiled = _.template(MapTemplate);
      var template = compiled();
      this.$el.append(template);
    },

    afterRender: function() {      
      var map = L.map('#map', {
        center: [47.6097, -122.3331],
        zoom: 13,
      });
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);
    }

  });

  return MapView;
});
