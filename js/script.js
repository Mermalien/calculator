'use strict';

//Agregamos el listener de load a window
window.addEventListener('load', () => {
  //Buscamos el display del total y los botones
  const total = document.querySelector('.total');
  const keypadButtons = document.getElementsByClassName('keypad-button');
  const skullButtons = document.getElementsByClassName('skull-button');

  //Convertimos el html collection en array
  const buttonsArray = Array.from(keypadButtons);
  const skullButtonsArray = Array.from(skullButtons);

  //Iteramos ese array y damos evento de click a los botones
  buttonsArray.forEach((button) => {
    button.addEventListener('click', () => {
      calculadora(button, total);
    });
  });
});

//Creamos la función que calcula
function calculadora(button, total) {
  //Según qué botón se apretó
  switch (button.innerHTML) {
    case 'DEL':
      borrar(total);
      break;

    case 'RESET':
      borrar(total);
      break;

    case '=':
      calculo(total);
      break;

    default:
      actualizar(total, button);
      break;
  }
}

//Creamos una función que hace muestra el cálculo
function calculo(total) {
  //Evalua el texto del display del total y lo muestra
  total.innerHTML = eval(total.innerHTML);
}

//Función que actualiza el display del total
function actualizar(total, button) {
  if (total.innerHTML == 0) {
    total.innerHTML = '';
  }
  total.innerHTML += button.innerHTML; //Añade los números al display
}

//Función de borrado
function borrar(total) {
  total.innerHTML = 0;
}

/*
//Desactivar botones de los creadores
document.getElementById('Marcos').onclick = 'this.disabled = true';
{
  return false;
}

document.getElementById('Andrea').onclick = 'this.disabled = true';
{
  return false;
}
*/
