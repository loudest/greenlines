requirejs.config({
  baseUrl: 'js/',
  paths: {
    jquery: 'lib/jquery/dist/jquery.min',
    underscore: 'lib/underscore/underscore-min',
    backbone: 'lib/backbone/backbone',
    leaflet: 'lib/leaflet/dist/leaflet-src',
    ol: 'lib/openlayers3/build/ol-debug',
    text: 'lib/requirejs-text/text',
    router: 'router',
    app: 'app'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'leaflet': {
      exports: 'L'
    },
    ol: {
      exports: 'ol'
    }
  }
})

require(['backbone', 'app', 'router'], function(Backbone, app, Router){
  app.router = new Router();

  Backbone.history.start();
});
