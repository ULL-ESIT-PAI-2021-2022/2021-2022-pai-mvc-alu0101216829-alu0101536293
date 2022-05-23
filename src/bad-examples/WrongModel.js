/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Gabriel Rodríguez Hernández
 * @since Feb 22 2022
 * @desc wrongModel.js
 * @see {@link https://jutge.org/problems/P97969}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
**/

'use  strict';

/**
 * @description Example of a wrong model class
 * @class
 */
export class Model {

  /**
   * @property {Number} myButtonVlaue value of the button
   * @private
   */
  #myButtonValue = 0;

  /**
   * @property {View} view view of the program
   * @private
   */
  #myView;

  /**
   * @description constructor of the class attributes are instanced here
   * @param {String} buttonName Name of the button
   * @param {View} view view of the program
   */
  constructor(buttonName, view) {
    this.#myView = view
    let button = document.getElementById(buttonName);
    
    button.addEventListener('click', function(event) {
      updateValue(button.value);
      this.#view.show();
    });
  }

  /**
   * @description This method updates  the value of our button
   * @public
   * @param {Number} newValue New value of the button
   */
  updateValue(newValue) {
    this.#myButtonValue = newValue;
  }

}

