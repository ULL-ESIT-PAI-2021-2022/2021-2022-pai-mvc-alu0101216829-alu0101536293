/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Vlad-Marian Lupu
  * @since May 20 2022
  * @desc The main class of the current example.
  */

'use strict';

import { Garage } from './models/garage.js';
import { GarageController } from './controllers/garage-controller.js';

function main() {
  const garage = new Garage();
  const garageController = new GarageController(garage);
}

main();