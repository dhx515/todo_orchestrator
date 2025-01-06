/**
 * @file SingleDeleteLoadUseCase.js
 * @description Implement of Todo Single Delete Load Use Case
 */
import ISingleDeleteLoadUseCase from './ISingleDeleteLoadUseCase';


/** @implements {ISingleDeleteLoadUseCase} */
export default class SingleDeleteLoadUseCase extends ISingleDeleteLoadUseCase {
    constructor(deleteProcessor, dataTransporter) {
        super(deleteProcessor, dataTransporter);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
        
        return await this.dataTransporter.transport();
    }
}