/**
 * @file BatchDeleteDataUseCase.js
 * @description Implement of Cancel Data Batch Delete Use Case
 */
import IBatchDeleteDataUseCase from './IBatchDeleteDataUseCase';


/** @implements {IBatchDeleteDataUseCase} */
export default class BatchDeleteDataUseCase extends IBatchDeleteDataUseCase {
    constructor(deleteProcessor) {
        super(deleteProcessor);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
    }
}