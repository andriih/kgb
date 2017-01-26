var form = document.forms.addNeighborsForm,
	fullName = form.elements.fullName,
	adres = form.elements.adres,
	addBtn = form.elements.btn,
	btn = '<button type="submit" name="btn">Remove</button>',
	check = '<input type="checkbox" name="inportant">',
	fields = document.getElementById('showNeighbors');

addBtn.addEventListener("click",function(){
	var newDiv = document.createElement("div");

	var fullNameField = document.createElement("span");
	var adresField = document.createElement("span");
	var btnField = document.createElement("span");
	var checkField = document.createElement("span");


	fullNameField.innerText = fullName.value;
	//console.log(fullNameField.innerText);
	btnField.innerHTML = btn;
	checkField.innerHTML = check;
	

	adresField.innerText = adres.value;
	//console.log(adresField.innerText);

	newDiv.appendChild(fullNameField);
	newDiv.appendChild(adresField);
	newDiv.appendChild(btnField);
	newDiv.appendChild(checkField);

	fields.appendChild(newDiv);
	console.log(newDiv);

});




