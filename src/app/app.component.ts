import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La aplicación super mega Divertida Mil';



}

const arrow1 = () => { console.log('Hola en el arrow'); };


const unaPromesa = new Promise(function (resolve, reject) {
  // Cleaning room
  const isClean = false;
  if (isClean) {
    resolve('Clean');
  } else {
    reject('is not Clean');
  }
});

unaPromesa.then(function (fromResolve) {
  console.log('the room is ' + fromResolve);
}).catch(function (fromReject) {
  console.log('the room is ' + fromReject);
});


const promesa2 = new Promise(function (resolve, reject) {
  let unValor = 2 * 10;
  let otroVal = (Math.random() * 10) + 1;
  unValor = unValor * otroVal;
  otroVal += 10;
  if (otroVal > 105) {
    resolve('Mayor que 105, con: ' + otroVal);
  } else {
    reject('Fue menor que 105, con: ' + otroVal);
  }
});

promesa2.then(function (fromResolve) {
  console.log(fromResolve);
}).catch(function (fromReject) {
  console.log(fromReject);
});

arrow1();

(function miPifi() {
  console.log('Este es mi primer IFFE');
}());
