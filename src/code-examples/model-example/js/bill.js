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

/**
 * @description Class that is destinated to save
 * the information about bills
 * @class
 */
export class Bills {

  /**
   * @property {Array} allBills Here we save the 
   * infortmation about all the bills
   * @private
   */
  #allBills = [];

  /**
   * @description Constructor of the class, attributes are instantiated here
   * @param {Object} bill Information about a bill
   */
  constructor(bill)  {
    this.#allBills = [bill];
  }

  /**
   * @description In this method we add bill information
   * for our database
   * @public
   * @param {Object} bill Information about a bill
   */
  addBill(bill) {
    this.#allBills.push(bill);
  }

  /**
   * @description This method return the id of the bill
   * @param {Number} position Position of the bill in the database
   * @return {String} id of the bill
   */
  getId(position) {
    return this.#allBills[position].id;
  }

  /**
   * @description This method return the price of the bill
   * @param {Number} position Position of the bill in the database
   * @return {String} price of the bill
   */
  getPrice(position) {
    return this.#allBills[position].price;
  }

  /**
   * @description This method return the products of the bill
   * @param {Number} position Position of the bill in the database
   * @return {String} products of the bill
   */
  getProducts(position) {
    return this.#allBills[position].products;
  }

}
