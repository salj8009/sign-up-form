
function revform() {

let nombre = document.getElementById('nombre').value;
let apellido = document.getElementById('apellido').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;


	if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
		return alert( 'el campo nombre no puede estar vacio');
	}else if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido))
	{
       return alert('el campo apellido no puede estar vacio');
	}else if(!(/\S+@\S+\.\S+/.test(email)))
	{
       return alert('Parece que esto no es un correo electrónico');
	}else if(password == null || password.length == 0)
	{
       return alert('el campo password no puede estar vacio');
	}else
	{
		alert("enviado");
	};	
}
