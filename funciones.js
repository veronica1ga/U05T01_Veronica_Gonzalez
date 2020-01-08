function cargar() {
  var duration = ['....', 'POPULAR DURATIONS', '4 Nights', '7 Nights', '10 Nights', '14 Nigths', 'DAILY', '1 Nights', '2 Nights', '3 Nights', '4 Nigths', '5 Nights', '6 Nights', '7 Nights', '8 Nigths']
  var select = document.getElementById('durations')

  for (var i = 0; i < duration.length; i++) {
    var option = document.createElement('option')
    option.innerHTML = duration[i]
    select.appendChild(option)
    option.setAttribute('class', 'night')
  }
  document.getElementById('durations').options[0].disabled = true
  document.getElementById('durations').options[1].disabled = true
  document.getElementById('durations').options[6].disabled = true
}
cargar()

function mostrar() {
  var parrafo = document.getElementById('oculto')
  parrafo.style.display = (parrafo.style.display == 'none') ? 'block' : 'none'
}

/* sumar niños */
var a = 0
var b = 0
function sumarNinos() {
  var suma = "";
  b = b + 1
  var inputNombre = document.getElementById('nino')
  inputNombre.value = b
  for (i = 1; i <= b; i++) {
    suma += 'Ni&ntilde;/a ' + i + ' <input type="number" form="edadninos" value="5" id="edad' + i + '"><br> ';
  }
  document.getElementById("zonaninos").innerHTML = suma;
}

function restarNinos() {
  var resta = "";
  b = b - 1
  var inputNombre = document.getElementById('nino')
  inputNombre.value = b
  for (i = 1; i <= b; i++) {
    resta += 'Ni&ntilde;/a ' + b + ' <input type="number" form="edadninos" value="5" id="edad' + b + '"><br> ';
  }
  document.getElementById("zonaninos").innerHTML = resta;
}


/* añadir adultos */
function sumarAdultos() {
  a = a + 1
  var inputNombre2 = document.getElementById('adulto')
  inputNombre2.value = a
}

function restarAdultos() {
  a = a - 1
  var inputNombre2 = document.getElementById('adulto')
  inputNombre2.value = a
}

/* Rellenar la reserva de las habitaciones y sus huéspedes */
function longitud() {
  var num1 = document.getElementById('nino').value
  var num2 = document.getElementById('adulto').value

  var resultado = parseInt(num1) + parseInt(num2)
  var divsOrange = document.getElementsByClassName('oculto')
  var totalNaranja = divsOrange.length
 document.getElementById('dato').value = totalNaranja + ' Room & ' + resultado + ' Guests'
  eliminar()
}

/*incremento de habitaciones*/
function myFunction() {
  var elmnt = document.getElementById('oculto')
  var cln = elmnt.cloneNode(true)
  document.body.appendChild(cln)
}

/* Eliminar clonados */
function eliminar() {
  var elements = document.getElementsByClassName("oculto");

  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

/* escribir en consola todo lo indicado*/
function escribir() {
  var text = document.getElementById('hotel').value
  var date = document.getElementById('date').value
  var combo = document.getElementById('durations')
  var selected = combo.options[combo.selectedIndex].value
  var night = document.getElementById('dato')
  document.getElementById('cont1').innerHTML = text + '<br>' + date + '<br>' + selected + '<br>' + night.value
  console.log('Nombre del hotel: ' + text + '\nFecha de reserva: ' + date + '\nNúmero de noches reservadas: ' + selected
    + '\nNúmero de habitaciones y personas: ' + night.value)
}
