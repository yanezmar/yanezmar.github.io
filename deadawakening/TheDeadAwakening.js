$(function(){
  
    question1();
    
});

var question1 = function(){
  
  //UPDATING GRAPHICS
  $("div.narrative, span.q1").html("Whats The Move?");
  $(".q1").show();
  $(".buttons").html("<button class='btn btn-primary q1-Leave'> Leave </button>");
  $(".buttons").append("<button class='btn btn-primary q1-Stay'> Stay </button>");
  
    //MAKE IT WORK
  $(".q1-Leave").click(function(){
      
      //Update Sidebar
      $(".q1-choice").html("Leave").show();
      //Run Question 2
      question2();
    });
   $(".q1-Stay").click(function(){
      
      //Update Sidebar
      $(".q1-choice").html("Stay").show();
      //Run Question 2
      $(".narrative").html("Congratulations You've gotten Your Brains Eatin. Refresh an Try Again");
    });
    
      //UPDATE GRAPHICS
  $("div.narrative, span.q2").html("You Leave, Now What Type of Gun do you grab");
  $(".q2").show();
  $(".buttons").html("<button class='btn btn-primary q2-RayGun'>Ray Gun</button>");
  $(".buttons").append("<button class='btn btn-primary q2-AK47'>AK-47</button>");
  $(".buttons").append("<button class='btn btn-primary q2-AR15'>AR-15</button>");
  $(".buttons").append("<button class='btn btn-primary q2-UZZI'>Uzzi </button>");
  

      //MAKE IT WORK
  $(".q2-RayGun").click(function(){
      $(".q2-choice").html("RPG").show();
      question3("Youve'Done Well soldier,Ray Gun is the Most Powerful weapon. You Survive");
  });
  
  $(".q2-AK47").click(function(){
      $(".q2-choice").html("AK47").show();
      question3("Unfortunatly you Died From the Recoil of the AK-47 and Shot Yourself");
  });
  
  $(".q2-AR15").click(function(){
      $(".q2-choice").html("AR-15").show();
      question3("You Aim is Good With The AR-15 But You Constintly Have To Reload Causing Death");
  });
  
  $(".q2-UZZI").click(function(){
      $(".q2-choice").html("Uzzi").show();
      question3("YOU Had A Very Small Chance of surviving with gun .");
  });
};
  
  var question3 = function(q2_choice){
    
    $("div.narrative, span.q3").html("You Choose The  "  +  q2_choice  +  " Because of :");
    $(".q3").show();
    if(q2_choice === "RayGun"){
        q3_buttons("Invincibility", "Unlimited Ammmo");   
    }
    else if(q2_choice === "Ak47"){
        q3_buttons("FireRate", "Recoil");
    }
    else if(q2_choice === "AR15"){
        q3_buttons("FireRate", "Accuracy");
    }
    else if(q2_choice === "UZZI"){
        q3_buttons("FireRate", "Reload Time");
    } 
      else
        q3_buttons("AK47", "UZZI");
  
};
  
  var q3_buttons = function(b1Text, b2Text){
    
    $(".buttons").html("<button class='btn btn-primary q3-button1'>" + b1Text + "</button>");
    $(".buttons").append("<button class='btn btn-primary q3-button2'>" + b2Text + "</button>");
    
    $(".q3-button1").click(function(){
        if(b1Text === "Invincibility"){
            displayChoice(b1Text,"YOU Survived");   
         }
        else if(b1Text === "FireRate"){
            displayChoice(b1Text, "You die Brah");
        }
        else if(b1Text === "FireRate"){
            displayChoice(b1Text, "You die Brah");
        }
        else if(b1Text === "FireRate"){
            displayChoice(b1Text, "You die Brah");
        }
        else 
            displayChoice("Arena", "You die Brah");
        });
   
        $(".q3-button2").click(function(){
        if(b2Text === "Unlimited Ammmo"){
        displayChoice(b2Text, "Your Survive");
        }    
        else if(b2Text === "Recoil"){
        displayChoice(b2Text, "You die Brah");
        }    
        else if(b2Text === "Accuracy"){
        displayChoice(b2Text, "You die Brah");
        }    
        else if(b2Text === "Reload Time"){
        displayChoice(b2Text, "You die Brah");
        }    
        else  
        displayChoice("RPG", "You die Brah");
});
}   

var displayChoice = function(finalAnswer, gameOption){
    $(".q3-choice").html(finalAnswer).show();
    $(".narrative").html(gameOption);
    $(".buttons").hide();
  
};