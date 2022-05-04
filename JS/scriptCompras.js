var precioTotal = 0;
		function valorTotal() {
			var posicion1 = document.getElementById('valorCarrito');
			var posicion2 = document.getElementById('cantidadCarrito');
			var posicion3 = document.getElementById('pagarTarjeta');
			posicion1.innerHTML = precioTotal+"€";
			posicion2.innerHTML = "Total a pagar: "+precioTotal+"€";
			posicion3.innerHTML = "Pagar: "+precioTotal+"€";
		}
		function obtenerPrecio() {
			switch (personaSeleccionada()) {
				case "hombre":
					switch (colorCamiseta()) {
						case "color negro":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 20;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 17;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 23;
								valorTotal();
							}
							break;
						case "color blanco/gris":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 17;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 15;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 20;
								valorTotal();
							}
							break;
						case "otro color":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 16;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 15;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 19;
								valorTotal();
							}
							break;
					}
					break;
				case "mujer":
					switch (colorCamiseta()) {
						case "color negro":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 17;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 15;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 20;
								valorTotal();
							}
							break;
						case "color blanco/gris":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 15;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 12;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 18;
								valorTotal();
							}
							break;
						case "otro color":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 14;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 13;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 17;
								valorTotal();
							}
							break;
					}
					break;
				case "niño":
					switch (colorCamiseta()) {
						case "color negro":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 15;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 12;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 18;
								valorTotal();
							}
							break;
						case "color blanco/gris":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 12;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 10;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 15;
								valorTotal();
							}
							break;
						case "otro color":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 13;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 11;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 16;
								valorTotal();
							}
							break;
					}
					break;
				case "bebé":
					switch (colorCamiseta()) {
						case "color negro":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 12;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 10;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 15;
								valorTotal();
							}
							break;
						case "color blanco/gris":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 9;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 7;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 12;
								valorTotal();
							}
							break;
						case "otro color":
							if (colorSeleccionado()=="dibujo en color") {
								precioTotal += 8;
								valorTotal();
							} else if (colorSeleccionado()=="dibujo en blanco y negro") {
								precioTotal += 7;
								valorTotal();
							} else if (colorSeleccionado()=="diseño personalizado") {
								precioTotal += 11;
								valorTotal();
							}
							break;
					}
					break;
			}
			añadirProducto();
		}
		function personaSeleccionada() {
			var persona = document.getElementById("persona").value;
			return persona;
		}
		function colorSeleccionado(){
  			var radiovalue=document.presupuesto.color.value;
  			if(radiovalue.length==0) radiovalue="ninguno";
 			return radiovalue;
		}
		function colorCamiseta() {
			var colorDeCamiseta = document.getElementById("colorCamiseta").value;
			return colorDeCamiseta;
		}
		function tallaElegida() {
			var tallaE = document.getElementById("talla").value;
			return tallaE;
		}
		function abrirCarrito() {
		    document.getElementById("carritoCompra").style.width = "25%";
		}
		function cerrarCarrito() {
		    document.getElementById("carritoCompra").style.width = "0";
		}
		function mostrarTarjeta() {
		    document.getElementById("fondoTarjeta").style.display = "block";
		    document.getElementById("carritoCompra").style.width = "0";
		}
		function ocultarTarjeta() {
		    document.getElementById("fondoTarjeta").style.display = "none";
		}
		function pagoCompleto() {
			ocultarTarjeta();
			precioTotal=0;
			valorTotal();
			eliminarProductos();
		}
		function añadirProducto() { 
			var persona = personaSeleccionada();
			var colordeCamiseta = colorCamiseta();
			var colorDibujo = colorSeleccionado();
			var talla = tallaElegida();
			const nuevoProd = document.createElement('p');
			const nuevoDivisor = document.createElement('hr');
			const textOfParagraph = document.createTextNode("Camiseta de "+persona+" en "+colordeCamiseta+", "+colorDibujo+". Talla "+talla);
			nuevoProd.appendChild(textOfParagraph);
			document.getElementById("cont3").appendChild(nuevoProd).appendChild(nuevoDivisor);
		}
		function mostrarPrecios() {
			document.getElementById("tablaPrecios").style.display = "block";
			document.getElementById("mostrarPrecios").style.display = "none";
			document.getElementById("images").style.float = "right";
			document.getElementById("images").style.marginRight = "2.5vw";
			document.getElementById("images").style.marginLeft = "0vw";
		}
		function ocultarPrecios() {
			document.getElementById("tablaPrecios").style.display = "none";
			document.getElementById("mostrarPrecios").style.display = "block";
			document.getElementById("images").style.float = "left";
			document.getElementById("images").style.marginLeft = "27vw";
		}
		function eliminarProductos() {
			const nuevoProd = document.getElementById("cont3").innerHTML = '';
		}
		function registroCompleto() {
			nombreUsuario = document.getElementById("nombreUsuario").value;
			contraseña = document.getElementById("passwdUsuario").value;
			nombre = document.getElementById("nombreCliente").value;
			apellidos = document.getElementById("apellidosCliente").value;
			dni = document.getElementById("dniCliente").value;
			mail = document.getElementById("correo").value;
			telfn = document.getElementById("tlfnCliente").value;
			if (nombreUsuario.length != 0 && contraseña.length != 0 && nombre.length != 0 && apellidos.length != 0 && dni.length != 0 && mail.length != 0 && telfn.length != 0 && document.getElementById("checkTerminos").checked) {
				if (document.getElementById("elegirSexo").value=="HOMBRE") {
					window.location.href = "seccionMasc.html";
				} else if (document.getElementById("elegirSexo").value=="MUJER") {
					window.location.href = "seccionFem.html";
				} else if (document.getElementById("elegirSexo").value=="Prefiero no decirlo") {
					window.location.href = "seccionFem.html";
				} else {
					alert("Debes elegir tu sexo");
				}
			} else {
				alert("Faltan datos obligatorios por introducir.");
			}
		}
		$(document).ready(function () {
				        $('#tarNum').on('input change', function () {
				            if ($(this).val().length === 19) {
				                $('#botonCompra').prop('disabled', false);
				            }
				            else {
				                $('#botonCompra').prop('disabled', true);
				            }
				        });
				    });