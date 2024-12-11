/**
 * @file SummaryInitialInspector.js
 * @description Implement of Summary Initial Inspector
 */
import ISummaryInitialInspector from './ISummaryInitialInspector';


/** @implements {ISummaryInitialInspector} */
export default class SummaryInitialInspector extends ISummaryInitialInspector {
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