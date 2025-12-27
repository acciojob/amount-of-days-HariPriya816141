//your JS code here. If required.
let input = prompt("Enter a year");

if (input !== "String" || input.trim() === ""){
	alert("Error: Please enter a valid year")
}else{
	let year = Number(input);
	if(Number.isNaN(year)){
		alert("Error: year must be a number");
	}else{
		alert(daysOfAYear(year));
	}
}

function daysOfAYear(y){
	if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0){
		return 366;
	}else{
		return 365;
	}
}






