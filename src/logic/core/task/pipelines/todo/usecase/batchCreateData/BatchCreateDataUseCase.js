/**
 * @file BatchCreateDataUseCase.js
 * @description Implement of Todo Batch Create Data Use Case
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