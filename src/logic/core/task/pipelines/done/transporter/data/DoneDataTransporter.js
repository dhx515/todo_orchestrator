/**
 * @file DoneTransporter.js
 * @description Implement of Done Data Transporter
 */
import IDoneDataTransporter from './IDoneDataTransporter';


/** @implements {IDoneDataTransporter} */
export default class DoneDataTransporter extends IDoneDataTransporter {
    constructor(dataStorage) {
        super(dataStorage);
    }

    transport() {
        return this.#generateUIRenderData();
    }

    #generateUIRenderData() {
        const uiRenderData = this.dataStorage.getDoneList();
        return uiRenderData;
    }
}