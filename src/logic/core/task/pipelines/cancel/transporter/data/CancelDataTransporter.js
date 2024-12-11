/**
 * @file CancelTransporter.js
 * @description Implement of Cancel Data Transporter
 */
import ICancelDataTransporter from './ICancelDataTransporter';


/** @implements {ICancelDataTransporter} */
export default class CancelDataTransporter extends ICancelDataTransporter {
    constructor(dataStorage) {
        super(dataStorage);
    }

    transport() {
        return this.#generateUIRenderData();
    }

    #generateUIRenderData() {
        const uiRenderData = this.dataStorage.getCancelList();
        return uiRenderData;
    }
}