/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Vlad-Marian Lupu
  * @since May 20 2022
  * @desc The controller class of the Garage.
  *       Adapted from {@link https://github.com/pablo-pg/Lissajous-Hypocycloid}
  */

'use strict';

export class GarageController {
  /** @private {object} The object of the buttom from html. */
  #showCarsButton;
  /** @private {object} The object of the buttom from html. */
  #addCarButton;

  /** @private {object} The object of the input form from html. */
  #carModelInput;
  /** @private {object} The object of the input form from html. */
  #carLicencePlateInput;

  /** @private {object} The instance of garage class. */
  #garage;

  /**
   * The class constructor.
   * @param {object} garage The instace of garage class.
   */
  constructor(garage) {
    this.#showCarsButton = document.getElementById('showCarsButton');
    this.#addCarButton = document.getElementById('addCarButton');

    this.#carModelInput = document.getElementById('carModelInput');
    this.#carLicencePlateInput = document.getElementById('carLicencePlateInput');

    this.#garage = garage;

    this.#addCarButton.addEventListener('click', () => {
      this.#garage.addCar(this.#carModelInput.value, this.#carLicencePlateInput.value);
    });

    this.#showCarsButton.addEventListener('click', () => {
      this.#garage.showCars();
    });
  }
}