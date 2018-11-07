$(document).ready(function(){
	$("#Fcontacto").submit(function( event ){
		event.preventDefault();

var Nombre = document.getElementById("name").value;
var Telefono = document.getElementById("telefono").value;
var Email = document.getElementById("email").value;
var mensaje = document.getElementById("Mensaj").value;
var contador = 0;


if(Nombre == null || Nombre.length == 0 || /^\s+$/.test(Nombre))
{
$("#name").parent().parent().attr("class","form-group has-error");
$("#name").parent().children("span").text("Debe ingresar Nombre").show();
contador++;
}else
{
$("#name").parent().parent().attr("class","form-group has-success");
$("#name").parent().children("span").text("").hide();
}

if(Telefono == null || Telefono.length == 0 || /^\s+$/.test(Telefono))
{
$("#telefono").parent().parent().attr("class","form-group has-error");
$("#telefono").parent().children("span").text("Debe ingresar Telefono").show();
contador++;
}else if( isNaN(Telefono))
{
$("#telefono").parent().parent().attr("class","form-group has-error");
$("#telefono").parent().children("span").text("Debe ingresar caracteres numericos").show();
contador++;
}else
{
$("#telefono").parent().parent().attr("class","form-group has-success");
$("#telefono").parent().children("span").text("").hide();
}

if(Email == null || Email.length == 0 || /^\s+$/.test(Email))
{
$("#email").parent().parent().attr("class","form-group has-error");
$("#email").parent().children("span").text("Debe ingresar correo electronico").show();
contador++;
}else if( !(/\S+@\S+\.\S+/.test(Email)))
{
$("#email").parent().parent().attr("class","form-group has-error");
$("#email").parent().children("span").text("Correo electronico inválido").show();
contador++;
}
else
{
	$("#email").parent().parent().attr("class","form-group has-success");
    $("#email").parent().children("span").text("").hide();
}

if(mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje))
{
$("#Mensaj").parent().parent().attr("class","form-group has-error");
$("#Mensaj").parent().children("span").text("Debe ingresar mensaje").show();
contador++;
}else
{
$("#Mensaj").parent().parent().attr("class","form-group has-success");
$("#Mensaj").parent().children("span").text("").hide();
}

if(contador == 0)
{
	$.ajax({
			type: 'POST',
			url: 'send.php',
			data: $(this).serialize(),
			success: function(data){
				$("#respuesta").slideDown();
				$("#respuesta").html(data);

		 document.getElementById("name").value = "";
         document.getElementById("telefono").value = "";
         document.getElementById("email").value = "";
         document.getElementById("Mensaj").value = "";
			}
		});

		return false;
}
	});
});

