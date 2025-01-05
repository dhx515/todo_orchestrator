/**
 * @file SingleDeleteLoadUseCase.js
 * @description Implement of Done Data Single Delete Load Use Case
 */
import ISingleDeleteLoadUseCase from './ISingleDeleteLoadUseCase';


/** @implements {ISingleDeleteLoadUseCase} */
export default class SingleDeleteLoadUseCase extends ISingleDeleteLoadUseCase {
    constructor(aSingleDeleteProcessor, aDataTransporer) {
        super(aSingleDeleteProcessor, aDataTransporer);
    }

    async execute(param) {
        await this.aSingleDeleteProcessor.process(param);
        
        return await this.aDataTransporer.transport();
    }
}