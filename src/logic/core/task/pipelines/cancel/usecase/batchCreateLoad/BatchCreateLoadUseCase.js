/**
 * @file BatchCreateLoadUseCase.js
 * @description Implement of Cancel Data Batch Create Load Use Case
 */
import IBatchCreateLoadUseCase from './IBatchCreateLoadUseCase';


/** @implements {IBatchCreateLoadUseCase} */
export default class CreateLoadUseCase extends IBatchCreateLoadUseCase {
    constructor(aBatchCreateProcessor, aDataTransporter) {
        super(aBatchCreateProcessor, aDataTransporter);
    }

    async execute(param) {
        await this.aBatchCreateProcessor.process(param);
        
        return await this.aDataTransporter.transport();
    }
}