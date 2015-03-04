function evaluate(expresion){
	operation = expresion.split("");
	total = "";
	for (i in operation) {
		if (operation[i] == "−") {
			total += "-";
		} else if (operation[i] == "×") {
			total += "*";
		} else if (operation[i] == "÷") {
			total += "/";
		} else {
			total += operation[i];
		}
	}
	return eval(total);
}

function keyPressed(key){
	if (key.match("[0-9]")) {
		$("#display").append(key);
	} else if (key == "."){
		numbers = $("#display").text().split(/[\+\−\×\÷]/);
		if (numbers.length == 1 && numbers[0].indexOf(".") < 1) {
			$("#display").append(key);
		} else if (numbers.length == 2 && numbers[1].indexOf(".") < 1) {
			$("#display").append(key);
		}
	} else if (key.match("=")) {
		exp = $("#display").text();
		$("#display").text(evaluate(exp));
	} else if (key.match("C")) {
		$("#display").text("");
	} else if (key.match("±")){
		if ($("#display").text().match("^-")){
			txt = $("#display").text();
			$("#display").text(txt.substring(1,txt.length));
		} else {
			txt = $("#display").text();
			$("#display").text("-"+txt);
		}
	} else if (key.match("[\+\−\×\÷]")){
		if ($("#display").text().indexOf('*[\+\−\×\÷]')){
			exp = $("#display").text();
			$("#display").text(evaluate(exp) + key);
		} else {
			$("#display").append(key);
		}
	}
	return;
}

$(function(){
	$("#calculator button").click(function(){
		keyPressed($(this).text());
	});
	$(document).keypress(function(e){
		switch(e.which) {
		case 8:
			keyPressed("C");
			break;
		case 99:
			keyPressed("C");
			break;
		case 13:
			keyPressed("=");
			break;
		case 43:
			keyPressed("+");
			break;
		case 45:
			keyPressed("−");
			break;
		case 42:
			keyPressed("×");
			break;
		case 47:
			keyPressed("÷");
			break;
		default:
			keyPressed(String.fromCharCode(e.which));
		}
	});
});
