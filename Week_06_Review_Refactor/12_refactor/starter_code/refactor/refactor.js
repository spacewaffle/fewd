//Use variables example
$("body").append("<p>The instructor for this course is Jon Cheng.</p>");

//VS

var first_name="Jon";
var last_name="Cheng";
$("body").append("<p>The instructor for this course is " + first_name + " "+last_name+".</p>");
//ASK students why this is better

//Use functions example
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

//VS
createLi("Milk");
createLi("Cookies");
createLi("Sugar");
createLi("Bananas");
createLi("Gatorade");
function createLi(myLiText){
	$("#container>ol").prepend("<li>"+myLiText+"</li>");
}

//Use Arrays
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

//VS
function createLi(myLiText){
  $("#container>ol").prepend("<li>"+myLiText+"</li>");
}
var groceries=["Milk","Cookies","Sugar","Bananas","Gatorade"];

for (var i = 0; i < groceries.length; i++) {
  createLi(groceries[i]);
}

//Combine jQuery selectors
$("#container").css("width","960px");
$("#main").css("width","960px");

//VS

$("#container,#main").css("width","960px");

//Combine multiple jQuery css, attr, etc changes
$("#container,#main").css("width","960px");
$("#container,#main").css("background","red");
$("#container,#main").css("color","purple");

//VS (yes we can do without the quotation marks but since we haven't done objects we don't want to be explaining why we don't need quotation marks)

$("#container,#main").css({"width":"960px","background":"red","color":"purple"});

//Chain jQuery function calls
$("input").css("width","200px");
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input</label>");

//VS
$("input").css("width","200px").attr("placeholder","My placeholder").before("<label>My input</label>");
