function validateForm() {
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;

	if(fname == "" || lname == "" || email == "" || message == "") {
		alert('Please fill in all fields');
	}else{
		alert('Thanks ' + fname + ' ' + lname +' your detalis have been succesfully submitted');
	}
}


function expand(paraID){
	var allPara = document.querySelectorAll('#services p');
	for(var i = 0; i < allPara.length; i++){
		allPara[i].classList.add('hidden');
	}
	document.getElementById(paraID).classList.remove('hidden');
}