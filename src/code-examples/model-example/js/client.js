/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Gabriel Rodríguez Hernández
 * @since may 20 2022
 * @desc cliente.js
 *       Este fichero simula la capa modulo en la que se almacenara la informacion sobre clientes
 * @see {@link https://app.codecov.io/gh}
 * @see {@link https://docs.google.com/presentation/d/1wrqfNeeNbbEwbAD1bAMqA4CfL2jINrtJ4YWzStd5MjM/edit#slide=id.g814cc5b720_1_0}
 * @see {@link https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-pai-p08-oop-alu0101216829}
 *
**/

'use strict';

/**
 * @description Class that is destinated to save
 * the information about the clients
 * @class
 */
export class Client {

  /**
   * @property {Array} allClients Here we save the 
   * infortmation about all the clients
   * @private
   */
  #allClients = [];

  /**
   * @description Constructor of the class, attributes are instantiated here
   * @param {Object} client Information about a client
   */
  constructor(client) {
    this.#allClients = [client]
  }

  /**
   * @description In this method we add client information
   * for our database
   * @public
   * @param {Object} client Information about a client
   */
  addClient(client) {
    this.#allClients.push(client);
  }

  /**
   * @description This method return the name of a client
   * @public
   * @param {Number} position Position of the client in the database
   * @return Name of a client
   */
  getName(position) {
    return this.#allClients[position].name;
  }

  /**
   * @description This method return the age of a client
   * @public
   * @param {Number} position Position of the client in the database
   * @return Age of a client
   */
  getAge(position) {
    return this.#allClients[position].age;
  }

  /**
   * @description This method return the dni of a client
   * @public
   * @param {Number} position Position of the client in the database
   * @return Dni of a client
   */
  getDni(position) {
    return this.#allClients[position].dni;
  }
}
