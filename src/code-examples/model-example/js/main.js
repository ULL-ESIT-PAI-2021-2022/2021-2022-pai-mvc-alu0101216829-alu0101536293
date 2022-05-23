/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Gabriel Rodríguez Hernández
 * @since may 2 2022
 * @desc mandelBrot.js
 *       This file contains the Dates class, this class is responsible for managing 
 *       dates and calculating the day following the current one.
 * @see {@link https://app.codecov.io/gh}
 * @see {@link https://docs.google.com/presentation/d/1wrqfNeeNbbEwbAD1bAMqA4CfL2jINrtJ4YWzStd5MjM/edit#slide=id.g814cc5b720_1_0}
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-p08-oop-alu0101216829}
 *
**/

'use strict';

import { Bills } from './bill.js';
import { Client } from './client.js';

/**
 * @description This function creates the canvas and manages the balls movements
 * @param {Number} width width of the canvas
 * @param {Number} height height of the canvas
 */
function main() {
  let bill = {
    id: '82934',
    price: '125,00',
    products: ['ventilador', 'cafetera', 'teclado mecanico']
  };
  
  let bills = new Bills(bill);
  addbills(bills, '24978', '52,99', ['champu', 'manzanilla', 'pizarra', 'lampara']);
  addbills(bills, '95612', '9,50', ['fanta', 'jamon', 'queso', 'pan', 'huevos', 'yogurts']);
  addbills(bills, '39002', '37,75', ['Cargador de movil', 'alfombrilla', 'webcam', 'microfono']);
  addbills(bills, '09401', '75,50', ['pelota', 'raqueta', 'tenis de deporte']);

  let clients = new Client({name: 'Jose', age: '37', dni: '12345678A'});
  addClients(clients, 'Samuel', '24', '14233254G');
  addClients(clients, 'Fernando', '51', '82368122D');
  addClients(clients, 'Marisa', '44', '10937223K');
  addClients(clients, 'Clara', '33', '94837234M');
  const event = document.getElementById('numberBill');
  const clientEvent = document.getElementById('numberClient');
  event.addEventListener('keypress', function(enter) {
    if (enter.key === 'Enter') {
      let pos = event.value - 1;
      if (pos < 0) {
        pos = 0;
      }
      if (pos > 4) {
        pos = 4
      }
      let text = getters(bills, pos);
      document.getElementById('cabecera').innerHTML = text;
    } 
  })

  clientEvent.addEventListener('keypress', function(enter) {
    if (enter.key === 'Enter') {
      let pos = clientEvent.value - 1;
      if (pos < 0) {
        pos = 0;
      }
      if (pos > 4) {
        pos = 4
      }
      console.log(pos);
      let text = gettersClients(clients, pos);
      document.getElementById('cabeceraClient').innerHTML = text;
    } 
  })
}

function getters(bills, pos) {
  let result = `id: ${bills.getId(pos)}<br>`;
  result += `price: ${bills.getPrice(pos)}<br>`;
  result += `products: <br>`;
  let products = bills.getProducts(pos);
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    console.log(products);
    result += `      - ${products[i]}<br>`;
  }
  return result;
}

function gettersClients(client, pos) {
  let result = `name: ${client.getName(pos)}<br>`;
  result += `age: ${client.getAge(pos)}<br>`;
  result += `dni: ${client.getDni(pos)}<br>`;
  return result;
}

function addbills(bills, newId, newPrice, newProducts)  {
  let bill = {
    id: newId,
    price: newPrice,
    products: newProducts
  };
  bills.addBill(bill);
}

function addClients(myClient, newName, newAge, newDni) {
  let client = {
    name: newName,
    age: newAge,
    dni: newDni
  };

  myClient.addClient(client);
}

main();

