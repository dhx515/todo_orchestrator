/**
 * @file BatchDeleteLoadUseCase.js
 * @description Implement of Done Data Batch Delete Use Case
 */
import IBatchDeleteDataUseCase from './IBatchDeleteDataUseCase';


/** @implements {IBatchDeleteDataUseCase} */
export default class BatchDeleteLoadUseCase extends IBatchDeleteDataUseCase {
    constructor(deleteProcessor) {
        super(deleteProcessor);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
    }
}