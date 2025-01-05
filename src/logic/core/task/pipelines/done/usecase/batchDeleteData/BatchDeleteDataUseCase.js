/**
 * @file BatchDeleteLoadUseCase.js
 * @description Implement of Done Data Batch Delete Use Case
 */
import IBatchDeleteDataUseCase from './IBatchDeleteDataUseCase';


/** @implements {IBatchDeleteDataUseCase} */
export default class BatchDeleteLoadUseCase extends IBatchDeleteDataUseCase {
    constructor(aBatchDeleteProcessor) {
        super(aBatchDeleteProcessor);
    }

    async execute(param) {
        await this.aBatchDeleteProcessor.process(param);
    }
}