
function beebBoop(number){
	var numberString=number.toString();
	var outputString;
	var hasOne=numberString.includes("1");
	var hasZero=numberString.includes("0");
	var inByThree = number%3===0; 
	
	
	/* if(!hasOne||!hasZero){
		
	} */
	
			if(inByThree){
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


function getArray(number){
	var outArray=[];

			for (var i=0;i<=number;i++){
				var x=beebBoop(i);
				outArray.push(x);
			} 
			
	return outArray;
}


$(document).ready(function() {

  $("#input-form").submit(function(event) {
	var inputNum=$("#numInput").val()
	var toOutputs = getArray(inputNum);
  $('#output').text(toOutputs);
    $("#result").show();
    event.preventDefault();
  });
}); 






















