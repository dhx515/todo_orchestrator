/**
 * @file SingleDeleteLoadUseCase.js
 * @description Implement of Cancel Data Single Delete Load Use Case
 */
import ISingleDeleteLoadUseCase from './ISingleDeleteLoadUseCase';


/** @implements {ISingleDeleteLoadUseCase} */
export default class DeleteLoadUseCase extends ISingleDeleteLoadUseCase {
    constructor(deleteProcessor, dataTransporter) {
        super(deleteProcessor, dataTransporter);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
        
        return await this.dataTransporter.transport();
    }
}