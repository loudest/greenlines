// needs a div in the html document with id="slider" and which contains a child div with id="sliderDisplay"

$(document).ready(function(){
	
   $('#slider').slider(
      {max:50,
       min:5,
       orientation:"vertical",
       step: 0.1,
       value: 15,
       change: function(event, ui){
         $("#sliderDisplay").text(
            ui.value.toLocaleString(
               "en-US",
               {style:"currency",
                currency:"USD",
                minimumFractionDigits:2}))}
         
      })
       
	
})

