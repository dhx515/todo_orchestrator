/**
 * @file BatchCreateDataUseCase.js
 * @description Implement of Todo Batch Create Data Use Case
 */
import IBatchCreateDataUseCase from './IBatchCreateDataUseCase';


/** @implements {IBatchCreateDataUseCase} */
export default class BatchCreateDataUseCase extends IBatchCreateDataUseCase {
    constructor(aBatchCreateProcessor) {
        super(aBatchCreateProcessor);
    }

    async execute(param) {
        await this.aBatchCreateProcessor.process(param);
    }
}