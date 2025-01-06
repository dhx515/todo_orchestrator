/**
 * @file SingleCreateDataUseCase.js
 * @description Implement of Todo Single Create Data Use Case
 */
import ISingleCreateDataUseCase from './ISingleCreateDataUseCase';


/** @implements {ISingleCreateDataUseCase} */
export default class SingleCreateDataUseCase extends ISingleCreateDataUseCase {
    constructor(createProcessor) {
        super(createProcessor);
    }

    async execute(param) {
        await this.createProcessor.process(param);
    }
}