/**
 * @file SingleDeleteDataUseCase.js
 * @description Implement of Cancel Data Single Delete Use Case
 */
import ISingleDeleteDataUseCase from './ISingleDeleteDataUseCase';


/** @implements {ISingleDeleteDataUseCase} */
export default class SingleDeleteDataUseCase extends ISingleDeleteDataUseCase {
    constructor(deleteProcessor) {
        super(deleteProcessor);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
    }
}