/**
 * @file Processor.js
 * @description Template Class of Processor
 */
import IProcessor from '../interfaces/IProcessor';


/** @implements {IProcessor} */
export default class Processor extends IProcessor {
    #logic = null;

    constructor(dataStorage, logic) {
        super(dataStorage);
        this.#logic = logic;
    }

    async process(param) {
        return await this.#logic(this.dataStorage, param);
    }
}