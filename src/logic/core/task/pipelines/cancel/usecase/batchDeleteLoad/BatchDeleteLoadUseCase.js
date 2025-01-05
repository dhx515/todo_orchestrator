/**
 * @file BatchDeleteLoadUseCase.js
 * @description Implement of Cancel Data Batch Delete Load Use Case
 */
import IBatchDeleteLoadUseCase from './IBatchDeleteLoadUseCase';


/** @implements {IBatchDeleteLoadUseCase} */
export default class DeleteLoadUseCase extends IBatchDeleteLoadUseCase {
    constructor(aBatchDeleteProcessor, aDataTransporter) {
        super(aBatchDeleteProcessor, aDataTransporter);
    }

    async execute(param) {
        await this.aBatchDeleteProcessor.process(param);
        
        return await this.aDataTransporter.transport();
    }
}