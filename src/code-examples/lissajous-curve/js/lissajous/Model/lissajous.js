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

// Model

/**
 * @description class that represent the mandelbrot set
 * @class
 */
export class Lissajous {

  /**
   * @property {Object} canvas the canvas were we will to print the mandelbrot set
   * @private
   */
  #canvas

  /**
   * @property {Object} ctx The contenxt of the canvas
   * @private
   */
  #ctx

  /**
   * @property {Object} data The Data of the canvas
   * @private
   */
  #data;

  /**
   * @property {Number} valueA frequency value for A
   * @private
   */
  #valueA;

  /**
   * @property {Number} valueB frequency value for B
   * @private
   */
  #valueB;

  /**
   * @property {Number} valuePhi value of the offset of the previous values
   * @private
   */
  #valuePhi;

  #move = false;

  /**
   * @description Constructor of the class, attributes are instantiated here
   * @param {Object} fileElement html file
   * @param {Number} canvasWidth width of the canvas
   * @param {Number} canvasHeigth height of the canvas
   */
  constructor(fileElement, canvasWidth, canvasHeigth) {
    console.log('gfds')
    this.#canvas = document.createElement("Canvas");
    this.#ctx = this.#canvas.getContext('2d');
    this.#canvas.width = canvasWidth;
    this.#canvas.height = canvasHeigth;
    fileElement.appendChild(this.#canvas);
    this.#valueA = 7;
    this.#valueB = 6;
    this.#valuePhi = 0.00;

    this.update();
  }

  /**
   * @description This method returns the context of the canvas
   * @public
   * @return {Object} The context of the canvas
   */
  getContext() {
    return this.#ctx;
  }

  /**
   * @description This method calculates and displays the lissanjous curves on the canvas
   * @public
   */
  draw() {
    this.#ctx.beginPath();
    this.#ctx.strokeStyle = [0, 255, 250];
    this.#ctx.lineWidth = "10 px";
    let width = this.#canvas.width / 2;
    let height = this.#canvas.height / 2;
    let coordinateX = width * Math.sin(this.#valuePhi);                          // cambiar por variable, parametros (3, 360)
    let coordinateY = height * Math.sin(this.#valueB * 0);
    this.#ctx.moveTo((this.#canvas.width - coordinateX / 2) / 2, (this.#canvas.height + coordinateY / 2) / 2);
    const limits = 2 * Math.PI;
    const sampling = 0.001;
    for (let i = 0; i <= limits; i+= sampling) {
      coordinateX = width * Math.sin(this.#valueA * i + this.#valuePhi);
      coordinateY = height * Math.sin(this.#valueB * i);
      this.#ctx.lineTo((this.#canvas.width - coordinateX / 2) / 2, (this.#canvas.height + coordinateY / 2) / 2);
    }
    this.#ctx.stroke();
    this.#ctx.closePath();
  }

  /**
   * @description This method update the canvas, first change
   * A's value
   * @public
   */
  updateValueA(valA) {
    this.#valueA = valA;
    this.update();
  }
  
  /**
   * @description This method update the canvas, first change
   * B's value 
   * @public
   */
  updateValueB(valB) {
    this.#valueB = valB;
    this.update();
  }

  /**
   * @description This method update the canvas, first change
   * Phi's value 
   * @public
   */
  updateValuePhi(valPhi) {
    this.#valuePhi = valPhi;
    this.update();
  }

  /**
   * @description This method change the move.
   * @public
   */
  changeMove() {
    if (this.#move === true) {
      this.#move = false;
    } else {
      this.#move = true;
    }
  }

  /**
   * @description This method update the canvas, first clean the 
   * previous canvas
   * @public
   */
  update = () => {
    console.log('model')
    if (this.#move) {
      this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
      this.draw();
      this.#valuePhi += 0.01;
      if (this.#valuePhi > 2) {
        this.#valuePhi = 0;
      }
      requestAnimationFrame(this.update);
    } else {
      this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
      this.draw();
    }
  }
}
