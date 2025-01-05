/**
 * @file SingleCreateLoadUseCase.js
 * @description Implement of Done Data Single Create Load Use Case
 */
import ISingleCreateLoadUseCase from './ISingleCreateLoadUseCase';


/** @implements {ISingleCreateLoadUseCase} */
export default class SingleCreateLoadUseCase extends ISingleCreateLoadUseCase {
    constructor(aSingleCreateProcessor, aDataTransporer) {
        super(aSingleCreateProcessor, aDataTransporer);
    }

    async execute(param) {
        await this.aSingleCreateProcessor.process(param);
        
        return await this.aDataTransporer.transport();
    }
}