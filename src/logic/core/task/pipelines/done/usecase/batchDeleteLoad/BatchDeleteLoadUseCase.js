/**
 * @file BatchDeleteLoadUseCase.js
 * @description Implement of Done Data Batch Delete Load Use Case
 */
import IBatchDeleteLoadUseCase from './IBatchDeleteLoadUseCase';


/** @implements {IBatchDeleteLoadUseCase} */
export default class BatchDeleteLoadUseCase extends IBatchDeleteLoadUseCase {
    constructor(deleteProcessor, dataTransporter) {
        super(deleteProcessor, dataTransporter);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
        
        return await this.dataTransporter.transport();
    }
}