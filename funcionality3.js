$(document).ready(function(){
$("#btn-restart").hide(); 

$("#mySelect").change(function(){    
    var cars = $('#mySelect').val(); 
    var arraycar = new Array();
    arraycar.length= cars;  
      for (var i = 0; i<4; i++){
        $('#car'+ (i+1) +'').remove(); 
      }
        for (var i = 0; i<arraycar.length; i++){ 
          $("#pista").append("<div id= 'car"+ (i+1) +"' ><img src='car"+ 
            (i+1) +".png' id='Car:"+ (i+1) +"' class='carposition'/></div>");}  
});
  
   $("#btn-start").click(function(){
    $(this).hide();
    $("#mySelect").hide();
    $("#btn-restart").show();
    raceEach();
    })
  $("#btn-restart").click(function(){
    $(this).hide();
    $("#btn-start").show();
    $("#mySelect").show();
    restart();
  })
  
});

function raceEach(){
  
    $(".carposition").each(function(){
      var totalposition=0;
      var goal = 1090; 
      
        while (totalposition<goal){
        
          var movement=Math.floor(Math.random()*(10+1));
          totalposition += movement;

          $(this).animate({marginLeft:totalposition}, 50, function(){
            
                var actualml= parseInt($(this).css("marginLeft"));

                if (actualml>(goal/2)){
                    $("#cp").text("¡Half way completed!");
                };

                if (actualml>(goal-1)){
                  
                    $("#ranking").append("<div class = 'rnk-td'>"+ $(this).attr('id')+"</div>");
                    $("#goal").text("¡FINISH!");
                }     
          });
      } 
    })     
} 

function restart(){ 
    $(".carposition").animate({marginLeft:0});
    $(".rnk-td").remove();
    $("#cp").text("Half way");
    $("#goal").text("GOAL");
}