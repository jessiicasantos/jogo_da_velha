	$(document).ready(function() {
	// $("input[name=square1]").val();

	function values() {
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
			== "o") {
			console.log("Venceu!");
		} else {
			console.log("Perdeu!");
		}
	}

	$("#btnTeste").on("click", values );

	});