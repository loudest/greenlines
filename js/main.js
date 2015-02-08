requirejs.config({
  baseUrl: 'js/',
  paths: {
    jquery: 'lib/jquery/dist/jquery.min',
    underscore: 'lib/underscore/underscore-min',
    backbone: 'lib/backbone/backbone',
    bootstrap: 'lib/bootstrap/dist/js/bootstrap',
    ol: 'lib/openlayers3/build/ol-debug',
    jqueryui: 'lib/jqueryui/ui',
    text: 'lib/requirejs-text/text',
    router: 'router',
    app: 'app'
  },
  shim: {
    'bootstrap': ['jquery'],
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'jqueryui': ['jquery'],
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
