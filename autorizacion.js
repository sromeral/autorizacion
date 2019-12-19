function mensaje(texto) {
	document.getElementById("mensaje").value = texto;
}

function verificar() {
	var usuario = document.getElementById("nombre").value;
	
	if (usuario === "") {
		mensaje("Debe escribir un nombre de usuario.");
	}
	else {
		if (usuario) {
			if (usuario === "guest" || usuario === "invitado" || usuario === "usuario") {
				mensaje("Usuario autorizado.");
			}
			else {
				mensaje("Usuario no autorizado.");
			}
		}
		else {
			mensaje("Debe escribir un nombre de usuario.");
		}
	}
}