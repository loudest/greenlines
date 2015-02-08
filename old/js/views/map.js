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
    center: ol.proj.transform([-122.3331, 47.6097], 'EPSG:4326', 'EPSG:3857'),
    zoom: 35,
    extent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],   

    initialize: function(model){
      this.model = model;
      this.on('render', this.afterRender);
      this.render();
      this.model.on('change:geoJson', this.rerenderMap);
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
    },

    rerenderMap: function(){
      var data = this.model.get('geoJson');
      console.log(data);
      var vectorSource = new ol.source.GeoJSON(data);
      var vectorLayer = new ol.layer.Vector({
        source: vectorSource
      });
      this.map.addLayer(vectorLayer);
      this.afterRender();
    }

  });

  return MapView;
});
