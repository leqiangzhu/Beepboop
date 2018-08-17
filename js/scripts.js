
/* var number=102;

		var numberString=number.toString();


			if(number%3===0){
				alert("I cant")
			}else {
						if (numberString.includes("1")){
							alert("ok,I see 1")
						}else if (numberString.includes("0")){
							alert("ok--this 0")
						}
			} */


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





/* var num=100;
var result=beebBoop(num)
alert("the result is :"+result); */



function getArray(number){
	var outArray=[];

			for (var i=0;i<=number;i++){
				var x=beebBoop(i);
				outArray.push(x);
			} 
			
	return outArray;
}

/* var x=getArray(100);

document.write("IOUTPUT:"+x+"</br>") 
		 
		//	
			 */

 





$(document).ready(function() {

  $("#input-form").submit(function(event) {
	var inputNum=$("#numInput").val()
	var toOutput = getArray(inputNum);
    $('#output').text(toOutput);
   
    $("#result").show();
	
	
	

    event.preventDefault();
  });
}); 






















