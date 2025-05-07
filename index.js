let display = document.querySelector(".display #valor");

//funcion que imprime valor en el display

function imprimir(valor) {
  const actual = display.innerHTML;
  if (actual.length < 30) {// Limita la expresión total a 30 caracteres
    display.innerHTML += valor;
  }
}


//funcion que agregar numero
function agregarNumero(numero) {
  const actual = display.innerHTML;
  const ultimoNumero = actual.split(/[\+\-\*\/]/).pop();

  // Si el número actual tiene menos de 10 caracteres, se permite agregar más
  if (ultimoNumero.length < 10) {
    imprimir(numero);
  }
}


//funcion que agregar operador
function agregarOperador(operador) {
  const actual = display.innerHTML;
  const ultimo = actual.slice(-1);

  if ("+-*/".includes(ultimo)) {
    return; // validacion evita operadores duplicados seguidos
  }
  if (actual !== "") {
    imprimir(operador);
  }
}


// Función para agregar un punto decimal (solo uno por número)Validacion
function agregarPunto() {
  const actual = display.innerHTML;

  // Obtiene el último número ingresado después del último operador
  const ultimoNumero = actual.split(/[\+\-\*\/]/).pop();

  // Si ya tiene un punto, no se permite agregar otro. validacion con match
  if (ultimoNumero.match(/\./)) {
    return;
  }
  if (ultimoNumero.length >= 10) return;

  // Si el usuario presiona punto al inicio o después de un operador, agrega "0."
  if (ultimoNumero === "") {
    imprimir("0.");
  } else {
    imprimir(".");
  }
}






function borrar() {
  display.innerHTML = "";
}

function devolver() {
  display.innerHTML = display.innerHTML.slice(0, -1);
}

function calcular() {
  try { //bloque de manejo de errores en js
    const resultado = math.evaluate(display.innerHTML);
    display.innerHTML = resultado;
  } catch (e) {
    display.innerHTML = "Error";
  }
}


























