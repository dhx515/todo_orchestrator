/**
 * @file BatchCreateLoadUseCase.js
 * @description Implement of Cancel Data Batch Create Load Use Case
 */
import IBatchCreateLoadUseCase from './IBatchCreateLoadUseCase';


/** @implements {IBatchCreateLoadUseCase} */
export default class CreateLoadUseCase extends IBatchCreateLoadUseCase {
    constructor(createProcessor, dataTransporter) {
        super(createProcessor, dataTransporter);
    }

    async execute(param) {
        await this.createProcessor.process(param);
        
        return await this.dataTransporter.transport();
    }
}