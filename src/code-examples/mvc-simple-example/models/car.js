/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Vlad-Marian Lupu
  * @since May 20 2022
  * @desc A class model for a car.
  * @module Car
  */

'use strict';

/** A class for a car model. */
export class Car {
  /** @private {string} The model of the car. */
  #model;

  /** @private {string} The licence plate of the car. */
  #licencePlate;

  /**
   * The class constructor.
   * @param {string} model The model of the car.
   * @param {string} licencePlate The licence plate of the car.   
   */
  constructor(model, licencePlate) {
    this.#model = model;
    this.#licencePlate = licencePlate;
  }

  /**
   * Getter property for model.
   * @returns {string} The model of the car.
   */
  getModel() {
    return this.#model;
  }

  /**
   * Getter property for licence plate.
   * @returns {string} The licence plate of the car.
   */
  getLicencePlate() {
    return this.#licencePlate;
  }

  /**
   * It formats the car details in a string.
   * @returns {string} The car details in a specific format.
   */
  toString() {
    return `Model: ${this.#model}\nLicence plate: ${this.#licencePlate}`;
  }
}
