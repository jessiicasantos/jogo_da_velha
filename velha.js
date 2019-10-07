//_v2
	$(document).ready(function() {
	// $("input[name=square1]").val();

	function values() {
		//count elements class ".square" and choose "x" or "o"
		for (var i = 0; i < $(".square").length; i++) {
			if ($(".square")[i].value == "x") {
				console.log("Square " + [i] + " - " + "\n" + "Valor escolhido: " + $(".square")[i].value);
			} else if ($(".square")[i].value == "o") {
				console.log("Square " + [i] + " - " + "\n" + "Valor escolhido: " + $(".square")[i].value);
			} else {
				console.log("Square " + [i] + " - " + "\n" + "Escolha 'x' ou 'o'" + $(".square")[i].value);
			}
		}

		//se forem 3 elements nos eixos: "x", "y" ou diagonal = venceu.
		
			//line 1 (x)
		  	if ($("input[name=square1]").val() && $("input[name=square2]").val() && $("input[name=square3]").val() || 
		  		$("input[name=square1]").val() && $("input[name=square4]").val() && $("input[name=square7]").val()  ||
		  		$("input[name=square3]").val() && $("input[name=square6]").val() && $("input[name=square9]").val() ||
			//line 1 diagonal
	 		$("input[name=square1]").val() && $("input[name=square5]").val() && $("input[name=square9]").val() ||
	 		$("input[name=square3]").val() && $("input[name=square5]").val() && $("input[name=square7]").val() ||
			//line 2 (x)
		 	$("input[name=square4]").val() && $("input[name=square5]").val() && $("input[name=square6]").val() ||
			//line 3 (x)
			 	$("input[name=square7]").val() && $("input[name=square8]").val() && $("input[name=square9]").val() ||
			//line 3 diagonal
			 	$("input[name=square7]").val() && $("input[name=square5]").val() && $("input[name=square3]").val() ||
			//middle (y)
			 	$("input[name=square2]").val() && $("input[name=square5]").val() && $("input[name=square8]").val()
			 	== "x") {
			  		console.log("Venceu!");
			 } else if ($("input[name=square1]").val() && $("input[name=square2]").val() && $("input[name=square3]").val() || 
			 	$("input[name=square1]").val() && $("input[name=square4]").val() && $("input[name=square7]").val()  ||
			 	$("input[name=square3]").val() && $("input[name=square6]").val() && $("input[name=square9]").val() ||
			 // line 1 diagonal
			 	$("input[name=square1]").val() && $("input[name=square5]").val() && $("input[name=square9]").val() ||
			 	$("input[name=square3]").val() && $("input[name=square5]").val() && $("input[name=square7]").val() ||
			 // line 2 (x)
			 	$("input[name=square4]").val() && $("input[name=square5]").val() && $("input[name=square6]").val() ||
			 // line 3 (x)
			 	$("input[name=square7]").val() && $("input[name=square8]").val() && $("input[name=square9]").val() ||
			 // line 3 diagonal
			 	$("input[name=square7]").val() && $("input[name=square5]").val() && $("input[name=square3]").val() ||
			 //middle (y)
			 	$("input[name=square2]").val() && $("input[name=square5]").val() && $("input[name=square8]").val()
			 	== "o") {
			 	console.log("Venceu!");
			 } else {
			 	console.log("Perdeu!");
			 }
				$(".square").length[i];
			}
	

	$("#btnTeste").on("click", values);

	});

	//next step: validar 'x' ou 'i'