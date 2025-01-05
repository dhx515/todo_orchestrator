/**
 * @file BatchDeleteLoadUseCase.js
 * @description Implement of Done Data Batch Delete Load Use Case
 */
import IBatchDeleteLoadUseCase from './IBatchDeleteLoadUseCase';


/** @implements {IBatchDeleteLoadUseCase} */
export default class BatchDeleteLoadUseCase extends IBatchDeleteLoadUseCase {
    constructor(aBatchDeleteProcessor, aDataTransporer) {
        super(aBatchDeleteProcessor, aDataTransporer);
    }

    async execute(param) {
        await this.aBatchDeleteProcessor.process(param);
        
        return await this.aDataTransporer.transport();
    }
}