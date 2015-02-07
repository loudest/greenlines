define([
  'jquery',
  'underscore',
  'backbone',
  'ol',
  'text!templates/map/map.html'
], function($, _, Backbone, ol, MapTemplate){
  var MapView = Backbone.View.extend({
    el: '#appView',
    id: 'map',
    redraw: false,
    //interactions: ol.interaction.defaults(),

    layers: [
      new ol.layer.Tile({
        source: new ol.source.MapQuest({layer: 'osm'}),
        name: 'basemap'
      })
    ],
    center: ol.proj.transform([-122, 47], 'EPSG:4326', 'EPSG:3857'),
    zoom: 13,
    extent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],   

    initialize: function(){
      this.on('render', this.afterRender);
      this.render();
    }, 
   
    render: function(){
      this.map = new ol.Map({
        interactions: this.interactions,
        target: this.id,
        layers: this.layers,
        view: new ol.View({
          center: this.center,
          zoom: this.zoom,
          zoomFactor: 1.25,
          extent: this.extent
        })
      });
      this.redraw = false;
      var compiled = _.template(MapTemplate);
      var template = compiled();
      $('body').append(template);
    },

    afterRender: function() {      
      var map = this.map;
      this.$el.append(map);
    }

  });

  return MapView;
});
