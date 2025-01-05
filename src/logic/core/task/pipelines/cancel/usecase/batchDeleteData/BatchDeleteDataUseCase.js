/**
 * @file BatchDeleteDataUseCase.js
 * @description Implement of Cancel Data Batch Delete Use Case
 */
import IBatchDeleteDataUseCase from './IBatchDeleteDataUseCase';


/** @implements {IBatchDeleteDataUseCase} */
export default class BatchDeleteDataUseCase extends IBatchDeleteDataUseCase {
    constructor(aBatchDeleteProcessor) {
        super(aBatchDeleteProcessor);
    }

    async execute(param) {
        await this.aBatchDeleteProcessor.process(param);
    }
}