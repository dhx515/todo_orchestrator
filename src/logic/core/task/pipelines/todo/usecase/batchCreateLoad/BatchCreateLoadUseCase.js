/**
 * @file BatchCreateLoadUseCase.js
 * @description Implement of Todo Batch Create Load Use Case
 */
import IBatchCreateLoadUseCase from './IBatchCreateLoadUseCase';


/** @implements {IBatchCreateLoadUseCase} */
export default class BatchCreateLoadUseCase extends IBatchCreateLoadUseCase {
    constructor(aBatchCreateProcessor, aDataTransporter) {
        super(aBatchCreateProcessor, aDataTransporter);
    }

    async execute(param) {
        await this.aBatchCreateProcessor.process(param);
        
        return await this.aDataTransporter.transport();
    }
}