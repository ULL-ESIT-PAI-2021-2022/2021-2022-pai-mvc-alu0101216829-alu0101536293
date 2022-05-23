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

import { Lissajous } from "./lissajous/Model/lissajous.js";
import { Controller } from "./lissajous/Controller/Controller.js";
import { View } from "./lissajous/View/view.js";

/**
 * @description this function call to the mandelbrot class
 * and make the canvas
 */
const main = () => {
  let liss = new Lissajous(document.body, 1080, 920);
  let view = new View(document);
  let controller = new Controller(document, liss, view);
}

main();