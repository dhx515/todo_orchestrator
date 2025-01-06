/**
 * @file SingleCreateLoadUseCase.js
 * @description Implement of Cancel Data Single Create Load Use Case
 */
import ISingleCreateLoadUseCase from './ISingleCreateLoadUseCase';


/** @implements {ISingleCreateLoadUseCase} */
export default class SingleCreateLoadUseCase extends ISingleCreateLoadUseCase {
    constructor(createProcessor, dataTransporter) {
        super(createProcessor, dataTransporter);
    }

    async execute(param) {
        await this.createProcessor.process(param);
        
        return await this.dataTransporter.transport();
    }
}