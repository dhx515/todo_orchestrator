/**
 * @file BatchCreateDataUseCase.js
 * @description Implement of Cancel Data Batch Create Use Case
 */
import IBatchCreateDataUseCase from './IBatchCreateDataUseCase';


/** @implements {IBatchCreateDataUseCase} */
export default class BatchCreateDataUseCase extends IBatchCreateDataUseCase {
    constructor(createProcessor) {
        super(createProcessor);
    }

    async execute(param) {
        await this.createProcessor.process(param);
    }
}