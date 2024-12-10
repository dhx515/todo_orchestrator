/**
 * @file TodoTransporter.js
 * @description Implement of Todo Data Transporter
 */
import ITodoDataTransporter from './ITodoDataTransporter';


/** @implements {ITodoDataTransporter} */
export default class TodoDataTransporter extends ITodoDataTransporter {
    constructor(dataStorage) {
        super(dataStorage);
    }

    transport() {
        return this.#generateUIRenderData();
    }

    #generateUIRenderData() {
        const uiRenderData = this.dataStorage.getTodoList();
        return uiRenderData;
    }
}