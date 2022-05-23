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

/**
 * @description This class takes care of the view of our program facing the user,
 */
export class View {

  /**
   * @property {Object} doc Html file
   * @private
   */
  #doc;

  /**
   * @description Constructor of the class, attributes are instantiated here
   * @param {Object} fileElement html file
   */
  constructor(fileElement) {
    this.#doc = fileElement;
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