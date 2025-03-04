/**
 * @file SummaryInitialInspector.js
 * @description Implement of Summary Initial Inspector
 */
import ISummaryDataInspector from './ISummaryDataInspector';


/** @implements {ISummaryDataInspector} */
export default class SummaryInitialInspector extends ISummaryDataInspector {
    constructor(dataStorage){
        super(dataStorage);
    }

    inspect() {
        const summary = this.dataStorage.getSummary();

        if (summary === null || typeof summary !== 'object') {
            return false;
        }

        return true;
    }
}