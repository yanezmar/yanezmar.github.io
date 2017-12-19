$(function(){
      var number1, number2,number3,number4;
      var comp1quant=0
      var comp2quant=0
      var comp3quant=0
      var comp4quant=0
      
      var comp1price=600
      var comp2price=800
      var comp3price=1000
      var comp4price=1500
      
      var tax =.07
      var subtotal=0
      var total=0
      
      
       $(".add").click(function(){
        //INPUT
       comp1price = parseInt($("#comp1price").val());
        comp2price = parseInt($("# comp2price").val());
       comp3price = parseInt($("#comp3price").val());
        comp4price = parseInt($("#comp4price").val());
   
     
       //CALCULATE
        var  subtotal= (comp1price * comp1qaunt) + (comp2price * comp2qaunt) + (comp3price * comp3qaunt)+(comp4price * comp4qaunt)
      
       var tax = subtotal * tax
      
       taxes.toFixed(2)
      
       var total =  subtotal +taxes
        
        
         //OUTPUT
        $(".total").css("font-size", "32px");
        $(".total").html(total);
        $(".tax").css("font-size", "32px");
        $(".tax").html(taxes);
        $(".subtotal).css("font-size", "32px");
        $(".subtotal").html(grandtotal);
        
    
       });
});