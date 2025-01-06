/**
 * @file SingleDeleteLoadUseCase.js
 * @description Implement of Done Data Single Delete Use Case
 */
import ISingleDeleteDataUseCase from './ISingleDeleteDataUseCase';


/** @implements {ISingleDeleteDataUseCase} */
export default class SingleDeleteLoadUseCase extends ISingleDeleteDataUseCase {
    constructor(deleteProcessor) {
        super(deleteProcessor);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
    }
}