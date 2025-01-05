/**
 * @file SingleCreateDataUseCase.js
 * @description Implement of Cancel Data Single Create Use Case
 */
import ISingleCreateDataUseCase from './ISingleCreateDataUseCase';


/** @implements {ISingleCreateDataUseCase} */
export default class SingleCreateDataUseCase extends ISingleCreateDataUseCase {
    constructor(aSingleCreateProcessor) {
        super(aSingleCreateProcessor);
    }

    async execute(param) {
        await this.aSingleCreateProcessor.process(param);
    }
}