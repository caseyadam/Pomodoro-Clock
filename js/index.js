$(function() {
  //with a comma here you don't need to rewrite var
var buzzer = $("#buzzer")[0],
    count = parseInt($("#num").html()),
    count2 = parseInt($("#breakNum").html());

  //buzzer.play();
  
  $("#session").hide(); 
  
  $("#start").click(function(){ 
    var counter = setInterval(function(){timer}, 3000);
    //this sets it to count in seconds
        //setInterval(function(timer, 1000));
                              
    //count *= 60;
    //count2 *= 60;                  
                              
    function timer() {
      $("#start, #m5Time, #m5Break, #a5Time, #a5Break, #title1, #reset, #breakNum, #num").hide();
      $("#session").show();
      $("#session").html("Session Time: ");
      
      count -= 1;
      //this stops the time at 0 seconds
      if(count===0){
        buzzer.play();
        clearInterval(counter);
        $("#num").hide();
        //this will be the interval name
        var counter2 = setInterval(breakTimer, 1000); //interval
      }
      
      $("#num").html(count);
      //you need to add an extra zero for the time to look right
      if(count % 60 >= 10){
        $('#num').html(Math.floor(count/60) + ":" + count % 60)
      }else{
        $('#num').html(Math.floor(count/60) + ":" + "0" + count % 60)
      }
      
      function breakTimer(){
        $("#session").html("Break Time: ");
        $("#breakNum").show();
        
        count2 -= 1;
        
        if(count2===0){
          clearInterval(counter2);
          buzzer.play();
          $("#reset").show();
          //when count = zero, it will hide these items
          $("#breakNum, #session").hide();
        }
        
        $("#breakNum").html(count2);
        
        if(count2 % 60 >= 10){
        $('#breakNum').html(Math.floor(count2/60) + ":" + count2 % 60) //keep overwriting number
      }else{
        $('#breakNum').html(Math.floor(count2/60) + ":" + "0" + count2 % 60)
      }
      }
    }
  });
  
    $("#m5Time").click(function() {
        if (count > 0) {
            count -= 5;
            $("#num").html(count);
        }
        //this prevents the screen from jumping back up to the top of the page
        event.preventDefault();
    });

    $("#a5Time").click(function() {
        count += 5;
        $("#num").html(count);
        event.preventDefault();
    });
    
    $("#m5Break").click(function() {
        if (count2 > 0) {
            count2 -= 5;
            $("#breakNum").html(count2);
        }
        event.preventDefault();
    });

    $("#a5Break").click(function() {
        count2 += 5;
        $("#breakNum").html(count2);
        event.preventDefault();
    });

  //Reset button that reloads page
  $("#reset").click(function(){
    location.reload();
  });
  
});