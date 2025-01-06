/**
 * @file SingleCreateDataUseCase.js
 * @description Implement of Done Data Single Create Use Case
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