/**
 * @file BatchDeleteLoadUseCase.js
 * @description Implementation of Todo Batch Delete Load Use Case
 */
import IBatchDeleteLoadUseCase from './IBatchDeleteLoadUseCase';


/** @implements {IBatchDeleteLoadUseCase} */
export default class BatchDeleteLoadUseCase extends IBatchDeleteLoadUseCase {
    constructor(aBatchDeleteProcessor, aDataTransporter) {
        super(aBatchDeleteProcessor, aDataTransporter);
    }

    async execute(param) {
        await this.aBatchDeleteProcessor.process(param);
        
        return await this.aDataTransporter.transport();
    }
}