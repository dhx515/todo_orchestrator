/**
 * @file SingleDeleteDataUseCase.js
 * @description Implement of Cancel Data Single Delete Use Case
 */
import ISingleDeleteDataUseCase from './ISingleDeleteDataUseCase';


/** @implements {ISingleDeleteDataUseCase} */
export default class SingleDeleteDataUseCase extends ISingleDeleteDataUseCase {
    constructor(aSingleDeleteProcessor) {
        super(aSingleDeleteProcessor);
    }

    async execute(param) {
        await this.aSingleDeleteProcessor.process(param);
    }
}