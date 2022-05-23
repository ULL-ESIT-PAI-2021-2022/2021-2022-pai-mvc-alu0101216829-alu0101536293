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
 * @description This class controls the operation of the program
 * @class
 */
export class Controller {

  /**
   * @property {Object} document Html document
   * @private
   */
  #document;

  /**
   * @property {Object} valueA value A button
   * @private
   */
  #valueA = document.getElementById('valueA');

    /**
   * @property {Object} valueB value B button
   * @private
   */
  #valueB = document.getElementById('valueB');

    /**
   * @property {Object} valuePhi value Phi button
   * @private
   */
  #valuePhi = document.getElementById('valuePhi');

    /**
   * @property {Object} animarAngulo value of animation button
   * @private
   */
  #animarAngulo = document.getElementById('animarAngulo');

  /**
   * @description Constructor of the class, attributes are instantiated here
   * @param {Object} doc html document
   * @param {Lissajous} lissajousModel lissajous model
   * @param {View} view view of the program
   */
  constructor(doc, lissajousModel, view) {
    this.#document = doc;


    this.#valueA.addEventListener('change',  (event) => {
      console.log('controller');
      lissajousModel.updateValueA(Number(this.#valueA.value));
      view.update('A');
    });

    this.#valueB.addEventListener('change',  (event) => {
      console.log('controller');
      lissajousModel.updateValueB(Number(this.#valueB.value));
      view.update('B');
    });

    this.#valuePhi.addEventListener('change',  (event) => {
      console.log('controller');
      lissajousModel.updateValuePhi(Number(this.#valuePhi.value));
      view.update('Phi');
    });

    this.#animarAngulo.addEventListener('change', (event) => {
      console.log('controller');
      lissajousModel.changeMove();
      lissajousModel.update();
    });
  }

  
}