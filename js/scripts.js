
//this function is to check one single number to be which output
function beebBoop(number){
	
	var numberString=number.toString();
	var outputString;
	var hasOne=numberString.includes("1");
	var hasZero=numberString.includes("0");
	var inByThree = number%3===0; 
	
	
			if(inByThree&&number!==0){
			outputString="I'm sorry, Dave. I'm afraid I can't do that.";
			
			//	alert("I cant")
			}else if (hasOne){
							outputString="Boop!";
							//alert("ok,I see 1")
			}else if (hasZero){
							//alert("ok--this 0")
							outputString="Beep!";
			}else{
				outputString=numberString;
			}
			return outputString;
	
}

//the function to get the array
 function getArray(number){
	var outArray=[];

			for (var i=0;i<=number;i++){
				var x=beebBoop(i);
				outArray.push(x);
			} 
			
	return outArray;
} 


		 	function outputResult(array) {
			  $("#output").text("");
			  var index = 0;
			  array.forEach(function(word){
				$("#output").append(word + "<br>");
				index++;
			  });
			  $("#results").slideDown();
			} 
	 
 
 

		 	function outputResult(array) {
			  $("#output").text("");
			  var index = 0;
			  array.forEach(function(word){
				$("#output").append(word + "<br>");
				index++;
			  });
			  $("#results").slideDown();
			} 
	 
	 //the reverse function
	 function outputResultReverse(array) {
			  $("#reoutput").text("");
			  var index = array.length;
			  array.forEach(function(word){
				$("#reoutput").append(word + "<br>");
				index--;
			  });
			  $("#reoutput").slideDown();
			} 
 

 

$(document).ready(function() {

  $("#input-form").submit(function(event) {
	   event.preventDefault();
	var inputNum=$("#numInput").val()
	var toOutputs = getArray(inputNum);
	outputResult(toOutputs);
    $("#result").show();
	// $("#reoutput").hide();
	
	
	
	$("#reverse").click(function(){
		 $("#output").hide();
		 outputResultReverse(toOutputs.reverse());
	});

});

  });
 




