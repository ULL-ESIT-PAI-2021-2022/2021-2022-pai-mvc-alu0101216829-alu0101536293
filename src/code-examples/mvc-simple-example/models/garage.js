/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Vlad-Marian Lupu
  * @since May 20 2022
  * @desc A class that simulates a car garage.
  * @module Garage
  */

'use strict';

import { Car } from './car.js';

/** A class that simulate a garage. */
export class Garage {
  /** @private {object[]} An array with all cars in the garage. */
  #cars;

  /**
   * The class constructor.
   * @param {object[]} cars The array with all cars in the garage. 
   */
  constructor(cars = []) {
    this.#cars = cars;
  }

  /**
   * It adds into the garage a new car.
   * @param {string} model The car model.
   * @param {string} licencePlate The car licence plate.
   */
  addCar(model, licencePlate) {
    this.#cars.push(new Car(model, licencePlate));
  }

  /**
   * It prints in the console all the cars available in the garage.
   */
  showCars() {
    for (const car of this.#cars) {
      console.log(car.toString());
    }
  }
}
