var x = '{"crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"type":"FeatureCollection","features":[{"type":"Feature","properties":{"hh_type1_vmt_rent":10103.4},"geometry":{"type":"Polygon","coordinates":[[[-122.326709998954,47.6076939987306],[-122.328901999638,47.6067849993931],[-122.329583999704,47.6074779991077],[-122.330054999882,47.6072809984999],[-122.330677999498,47.6080069992203],[-122.331009999759,47.6088569983328],[-122.328666999462,47.6098339985231],[-122.326709998954,47.6076939987306]]]}},{"type":"Feature","properties":{"hh_type1_vmt_rent":9986.76},"geometry":{"type":"Polygon","coordinates":[[[-122.325285999447,47.6184939985249],[-122.32528899982,47.6177399989261],[-122.325563000355,47.6177379988581],[-122.325544999015,47.6163399992149],[-122.326788999495,47.6163399992149],[-122.326795000241,47.6170869983923],[-122.327881999464,47.6166319991862],[-122.3278549997,47.6184949988472],[-122.327855999525,47.6195789991061],[-122.325295000566,47.619619999344],[-122.325285999447,47.6184939985249]]]}},{"type":"Feature","properties":{"hh_type1_vmt_rent":9934.92},"geometry":{"type":"Polygon","coordinates":[[[-122.328209998629,47.6110119993115],[-122.329245999595,47.6105569987209],[-122.328666999462,47.6098339985231],[-122.331009999759,47.6088569983328],[-122.33114299893,47.6097389987099],[-122.331342998946,47.6097189985997],[-122.330165999312,47.6129509992717],[-122.32991500014,47.6130579989732],[-122.328209998629,47.6110119993115]]]}}]}'


define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var URLROOT = "" // ?
  var userModel = Backbone.Model.extend({
    urlRoot : URLROOT,
    url : function () {
      return this.urlRoot + "/?wage="+this.income
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
            // ol api calls go here
         }})})}})
 
  
            
    
  return userModel;
})
/?wage=10
greenliners-api.herokuapp.com/