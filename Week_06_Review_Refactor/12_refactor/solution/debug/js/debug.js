//error thrown example
$("body").append("<h1>Hi world!</h1>");

var pies=["Cherry","Pumpkin","Banana","Rhubarb"];

//console.log example, log the pie array to check for issues
console.log(pies);
$("body").append("There are "+pies.length+" total pies.<br>");

for(var i = 0; i < pies.length; i++){

	//console.log example, log each pie before the if statements 
	//console.log example, leave logs inside the if statements to ensure that they work 
	console.log("pie is " + pies[i]);
	if(pies[i] == "Cherry"){
		console.log("matched cherry");
		$("body").append(i+1+") "+pies[i]+": Yum!<br>");
	}
	else if(pies[i] == "Rhubarb"){
		console.log("matched rhubarb");
		$("body").append(i+1+") "+pies[i]+": Yuck<br>");
	}
	else if(pies[i] == "Banana"){
		console.log("matched banana");
		$("body").append(i+1+") "+pies[i]+": Yuck<br>");
	}
	else if(pies[i] == "Pumpkin"){
		console.log("matched pumpkin");
		$("body").append(i+1+") "+pies[i]+": Yum!<br>");
	}
}
