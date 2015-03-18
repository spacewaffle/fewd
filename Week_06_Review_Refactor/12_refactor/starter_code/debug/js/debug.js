//error thrown example
$("body")append("<h1>Hi world!</h1>");

var pies=["Cherry","Pumpkin","Banana","a","Rhubarb"];

//console.log example, log the pie array to check for issues
$("body").append("There are "+pies.length+" total pies.<br>");

for(var i = 0; i < pies.length; i++){

	//console.log example, log each pie before the if statements 
	//console.log example, leave logs inside the if statements to ensure that they work 
	if(pies[i] == "Cherry"){
		$("body").append(i+1+") "+pies[i]+": Yum!<br>");
	}
	else if(pies[i] == "Rhubarb"){
		$("body").append(i+1+") "+pies[i]+": Yuck<br>");
	}
	else if(pies[i] = "Banana"){
	}
	else if(pies[i] == "Pumpkin"){
		$("body").append(i+1+") "+pies[i]+": Yum!<br>");
	}
}
