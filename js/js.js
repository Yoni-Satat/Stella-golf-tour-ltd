function validateForm() {
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;

	if(fname == "" || lname == "" || email == "" || message == "") {
		alert('Please fill in all fields');
	}else{
		alert('Thank you, your detalis have been succesfully submitted');
	}
}


function toggle(toggleID){
	document.getElementById(toggleID).classList.toggle('hidden');
}