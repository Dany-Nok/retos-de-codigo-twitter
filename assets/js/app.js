// PASO 1: 1) Diseñar un formulario que permita ingresar un texto y un botón para "twittear". (en HTML -OK)
        // 2) Agregar un evento de click al botón o de submit (enviar) al formulario. (en HTML -OK)
        // 3) En el evento, obtener el texto. (en JS -OK)
        // 4) Agregar el texto al HTML. (en JS -OK)

/* ESTO SE VA CREANDO EN ORDEN, EL HTML SOLO SERVIRÁ DE REFERENCIA!!!
SE VA CREANDO DE ADENTRO HACIA AFUERA*/

function add() { //Toma el valor que está ingresando/escribiendo el usuario
  var comentarios = document.getElementById('txt').value; //Crea variable, llamándola por su ID y rescata su valor (lo que escribió el usuario)
  document.getElementById('txt').value = ""; //Esto LIMPIA EL TEXT AREA!
  var nuevoComentario = document.createElement('div'); //CREA UN CONTENEDOR PARA LOS COMENTARIOS!
  var cont = document.getElementById('comments');

  var check = document.createElement('input'); // CREA EL "TIPO" DE CONTENEDOR PARA LOS COMENTARIOS

  var paragraph = document.createElement('p'); // CREA PARRAFO
  paragraph.classList.add('color');
  var nodeText = document.createTextNode(comentarios); // ESTO DEBE CREAR (DEFINIR) UN NODO DE TEXTO
  paragraph.appendChild(nodeText);

  nuevoComentario.appendChild(paragraph); // AHORA ESTO AGREGANDO EN ORDEN LO QUE SE HA CREADO AL DIV VACIO
  cont.appendChild(nuevoComentario);

//PASO 2: 1) No ingresar texto vacío (deshabilitar el botón de "twittear").
       // 2) Contar la cantidad de caracteres de forma regresiva.

/*function charCount(){
  var valorCaracteres = document.getElementById('txt').value;
  var maxCaracteres = 140;
  var caracteres = document.getElementById('comments').value;
  var longitud = caracteres.length;

  valor.innerHTML = maxCaracteres - longitud;
}
  /*function count(obj){
    var element = document.getElementById('txt');
    element.innerHTML = 140 -obj.value.length;
    document.getElementById('txt').size = document.getElementById('txt').value.length;
//un if para cambiar color segun caracteres
    if(document.getElementById('txt').value.length >=120 ){
        element.style.color = 'black';
    }else(document.getElementById('txt').value.length >=130);
        element.style.color = 'red';*/
}
//PASO 3: 1) Si pasa los 140 caracteres, deshabilitar el botón.
        //2) Si pasa los 120 caracteres, mostrar el contador con OTRO color.
        //3) Si pasa los 130 caracteres, mostrar el contador con OTRO color.
        //4) Si pasa los 140 caracteres, mostrar el contador en negativo.

//PASO 4: 1) Al presionar enter(/n) que crezca el textarea de acuerdo al tamaño del texto.
