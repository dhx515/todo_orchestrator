/**
 * @file Inspector.js
 * @description Template Class of Inspector
 */
import IInspector from '../interfaces/IInspector';


/** @implements {IInspector} */
export default class Inspector extends IInspector {
    #logic = null;

    constructor(dataStorage, logic) {
        super(dataStorage);
        this.#logic = logic;
    }

    async inspect() {
        return await this.#logic(this.dataStorage);
    }
}