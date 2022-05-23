/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Gabriel Rodríguez Hernández
 * @since may 20 2022
 * @desc factura.js
 *       Este fichero simula la capa modulo en la que se almacenara la informacion sobre facturas
 * @see {@link https://app.codecov.io/gh}
 * @see {@link https://docs.google.com/presentation/d/1wrqfNeeNbbEwbAD1bAMqA4CfL2jINrtJ4YWzStd5MjM/edit#slide=id.g814cc5b720_1_0}
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-p08-oop-alu0101216829}
 *
**/

'use strict';

import { Client } from "./client";
import { Bills } from "./bill";

export class Controller {
  #clients;
  #bills;

  constructor(clientModel, billModel) {
    this.#bills = billModel;
    this.#clients = clientModel;
  }
}