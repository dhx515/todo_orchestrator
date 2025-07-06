/**
 * @file Transporter.js
 * @description Template Class of Transporter
 */
import ITransporter from '../interfaces/ITransporter';


/** @implements {ITransporter} */
export default class Transporter extends ITransporter {
    #logic = null;

    constructor(dataStorage, logic) {
        super(dataStorage);
        this.#logic = logic;
    }

    async transport() {
        return await this.#logic(this.dataStorage);
    }
}