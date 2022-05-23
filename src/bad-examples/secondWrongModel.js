/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Gabriel Rodríguez Hernández
 * @since Feb 22 2022
 * @desc secondWrongModel.js
 * @see {@link https://jutge.org/problems/P97969}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
**/

'use strict';

/**
 * @description this  is a wrong model example
 * @class
 */
export class Model {
  
  /**
   * @property {Array} cars All the cars that compete
   * @private
   */
  #cars = [];

  /**
   * @property {Array} drivers All the drivers that compete
   * @private
   */
  #drivers = [];

  /**
   * @property {Array} circuits All the circuits that are in the competition
   * @private
   */
  #circuits = [];

  /**
   * @description Constructor of the class, the attributes are instanced here
   * @param {Object} newCar A car that compete
   * @param {Object} newDriver A driver that compete
   * @param {Object} newCircuits A circuit that are in the competition
   */
  constructor(newCar, newDriver, newCircuits)  {
    this.#cars.push(newCar);
    this.#drivers.push(newDriver);
    this.#circuits.push(newCircuits);
  }

  /**
   * @description This method add a car to our database
   * @public
   * @param {Object} newCar A car that compete
   */
  addCar(newCar) {
    this.#cars.push(newCar);
  }

  /**
   * @description This method add a driver to our database
   * @public
   * @param {Object} newCar A driver that compete
   */
  addDriver(newDriver) {
    this.#drivers.push(newDriver)
  }

  /**
   * @description This method add a circuit to our database
   * @public
   * @param {Object} newCar A circuit that is in the compertition
   */
  addCircuit(newCircuit) {
    this.#circuits.push(newCircuit);
  }

  /**
   * @description This method return a car that compete
   * @public
   * @param {Number} position position in database
   * @returns {Object} car that compete
   */
  getCar(position) {
    return this.#cars[position];
  }

  /**
   * @description This method return a driver that compete
   * @public
   * @param {Number} position position in database
   * @returns {Object} driver that compete
   */
  getDrivers(position) {
    return this.#drivers[position];
  }

  /**
   * @description This method return a circuit
   * @public
   * @param {Number} position position in database
   * @returns {Object} A circuit that is in the compertition
   */
  getCircuits(position) {
    return this.#circuits[position];
  }
}