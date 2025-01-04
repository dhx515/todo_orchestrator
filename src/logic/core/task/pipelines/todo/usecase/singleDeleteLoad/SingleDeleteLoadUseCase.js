/**
 * @file SingleDeleteLoadUseCase.js
 * @description Implement of Todo Single Delete Load Use Case
 */
import ISingleDeleteLoadUseCase from './ISingleDeleteLoadUseCase';


/** @implements {ISingleDeleteLoadUseCase} */
export default class SingleDeleteLoadUseCase extends ISingleDeleteLoadUseCase {
    constructor(aSingleDeleteProcessor, aDataTransporter) {
        super(aSingleDeleteProcessor, aDataTransporter);
    }

    async execute(param) {
        await this.aSingleDeleteProcessor.process(param);
        
        return await this.aDataTransporter.transport();
    }
}