/**
 * @file SummaryEmptyInspector.js
 * @description Implement of Summary Empty Inspector
 */
import ISummaryDataInspector from './ISummaryDataInspector';


/** @implements {ISummaryDataInspector} */
export default class SummaryEmptyInspector extends ISummaryDataInspector {
    constructor(dataStorage){
        super(dataStorage);
    }

    inspect() {
        const summary = this.dataStorage.getSummary();

        if (summary === null || typeof summary !== 'object') {
            return true;
        }

        return false;
    }
}