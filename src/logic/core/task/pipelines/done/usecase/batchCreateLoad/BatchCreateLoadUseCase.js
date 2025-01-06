/**
 * @file BatchCreateLoadUseCase.js
 * @description Implement of Done Data Batch Create Load Use Case
 */
import IBatchCreateLoadUseCase from './IBatchCreateLoadUseCase';


/** @implements {IBatchCreateLoadUseCase} */
export default class BatchCreateLoadUseCase extends IBatchCreateLoadUseCase {
    constructor(createProcessor, dataTransporter) {
        super(createProcessor, dataTransporter);
    }

    async execute(param) {
        await this.createProcessor.process(param);
        
        return await this.dataTransporter.transport();
    }
}