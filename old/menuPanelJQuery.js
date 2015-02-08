$(document).ready(function(){
   $("#panelToggle").click(function(){
        $("#panel").slideToggle("slow");
    });
   
   updateMap = function(value) { "I am a dummy function"}
   $('#slider').slider(
      {max:50,
       min:5,
       //orientation:"vertical",
       step: 0.1,
       value: 15,
       slide: function(event, ui){
         $("#sliderDisplay").text(
            ui.value.toLocaleString(
               "en-US",
               {style:"currency",
                currency:"USD",
                minimumFractionDigits:2}))},
       stop: function( event, ui ) { updateMap(ui.value)}  
      })
       
	
})
