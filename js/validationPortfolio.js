$(document).ready(function(){
	$('#btnPortfolio').click(function(){
		var email = $('#email').val();
		var asunto = $('#asunto').val();

		function validarEmail( email ) {
			expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		    if ( !expr.test(email) ) {
		        alert("Error: La dirección de correo " + email + " es incorrecta. VERIFIQUE!");
		    }
		}
		validarEmail( email );
		
		if (asunto == ''){
			alert('Ingrese asunto');
		}else {
			$('#formPortfolio').submit();
		}
	});
});