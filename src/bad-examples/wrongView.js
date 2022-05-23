/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Gabriel Rodríguez Hernández
 * @since Feb 22 2022
 * @desc wrongView.js
 * @see {@link https://jutge.org/problems/P97969}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
**/

'use strict';

/**
 * @description  Example of a wrong view class
 * @class
 */
export class View {

  /**
   * @property {Object} document Html document
   * @private
   */
  #document

  /**
   * @property {Object} controller The controller of the class
   * @private
   */
  #controller

  /**
   * @description Constructor of the class, attributes are instanced here
   * @param {Object} controller The controller of the class
   * @param {String} buttonName  The name of the button
   * @param {Object} document Html document
   */
  constructor(controller, buttonName, document)  {
    this.#document  = document;
    this.#controller = controller;

    let event  = document.getElementById(buttonName);
    event.addEventListener('click', function(event) {
      controller.callModel(event);
    });
  }

  /**
    * @description This method update the values of the buttons 
    * on the web page
    * @public
    * @param {String} button Name of the button
  */
  update(button) {
    console.log('view');
    let buttName = "button" + button;
    let valueName = "value" + button;
    let visualizer = this.#doc.getElementById(buttName);
    let slide = this.#doc.getElementById(valueName);
    slide.oninput = function() {
      visualizer.innerHTML = slide.value;
    }
  }

}