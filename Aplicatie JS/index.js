

window.addEventListener("load", function isOdd(){
var a= document.getElementById('introdu').value;
	if(typeof a != number) 

		alert (a+"is not a valid value. Please write a number");

	else{

		if(a%2==1)
			alert(a+"is an odd number");
		else
			alert(a+"is not an odd number ");
	}
		
});




