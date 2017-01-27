var form = document.forms.addNeighborsForm,
	fullName = form.elements.fullName,
	msg = document.getElementsByClassName('msg'),
	adres = form.elements.adres,
	addBtn = form.elements.btn,
	btn = '<button type="submit" name="btn">Remove</button>',
	check = '<input type="checkbox" name="inportant">',
	showNeighbors = document.getElementById('showNeighbors');

fullName.value.trim();
adres.value.trim();

form.addEventListener("submit",function(e){
	
	if (fullName.value.length===0) {
		msg[0].innerText = "Name cant be empty!";
		e.preventDefault();
	}else{
		msg[0].innerText = "";
	}
	if (adres.value.length===0) {
		msg[1].innerHTML ="Adres cant be empty!";
		e.preventDefault();
	}else{
		msg[1].innerHTML ="";
	}

	if(fullName.value.length != 0 && adres.value.length != 0){
	
		var newDiv = document.createElement("div");

		var fullNameField = document.createElement("span");
		var adresField = document.createElement("span");
		var btnField = document.createElement("span");
		var checkField = document.createElement("span");


		fullNameField.innerText = fullName.value.trim();
		adresField.innerText = adres.value.trim();
		btnField.innerHTML = btn;
		checkField.innerHTML = check;
		

		newDiv.appendChild(fullNameField);
		newDiv.appendChild(adresField);
		newDiv.appendChild(checkField);
		newDiv.appendChild(btnField);
		
		showNeighbors.appendChild(newDiv);

		fullName.value ="";	
		adres.value ="";

	}else{
		e.preventDefault();
	}

});



showNeighbors.addEventListener("click",function(e){

	var target = e.target,
		parDiv = target.parentElement.parentElement;
	if(target.innerHTML === "Remove"){
		target.parentElement.parentElement.remove();
	}

	if(target.checked){
		console.log("checked");
		parDiv.style.backgroundColor = "red";
	}else if(!target.checked){
		parDiv.style.backgroundColor = "white";
		console.log("unchecked");
	}

});



