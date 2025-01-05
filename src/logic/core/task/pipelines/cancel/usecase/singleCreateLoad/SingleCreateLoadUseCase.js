/**
 * @file SingleCreateLoadUseCase.js
 * @description Implement of Cancel Data Single Create Load Use Case
 */
import ISingleCreateLoadUseCase from './ISingleCreateLoadUseCase';


/** @implements {ISingleCreateLoadUseCase} */
export default class SingleCreateLoadUseCase extends ISingleCreateLoadUseCase {
    constructor(aSingleCreateProcessor, aDataTransporter) {
        super(aSingleCreateProcessor, aDataTransporter);
    }

    async execute(param) {
        await this.aSingleCreateProcessor.process(param);
        
        return await this.aDataTransporter.transport();
    }
}