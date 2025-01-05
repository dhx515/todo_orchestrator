/**
 * @file SingleDeleteLoadUseCase.js
 * @description Implement of Done Data Single Delete Use Case
 */
import ISingleDeleteDataUseCase from './ISingleDeleteDataUseCase';


/** @implements {ISingleDeleteDataUseCase} */
export default class SingleDeleteLoadUseCase extends ISingleDeleteDataUseCase {
    constructor(aSingleDeleteProcessor) {
        super(aSingleDeleteProcessor);
    }

    async execute(param) {
        await this.aSingleDeleteProcessor.process(param);
    }
}