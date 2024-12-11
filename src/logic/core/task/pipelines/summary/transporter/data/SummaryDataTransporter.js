/**
 * @file SummaryTransporter.js
 * @description Implement of Summary Data Transporter
 */
import ISummaryDataTransporter from './ISummaryDataTransporter';


/** @implements {ISummaryDataTransporter} */
export default class SummaryDataTransporter extends ISummaryDataTransporter {
    constructor(dataStorage) {
        super(dataStorage);
    }

    transport() {
        return this.#generateUIRenderData();
    }

    #generateUIRenderData() {
        const uiRenderData = this.dataStorage.getSummary();
        return uiRenderData;
    }
}