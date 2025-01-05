/**
 * @file BatchCreateLoadUseCase.js
 * @description Implement of Done Data Batch Create Load Use Case
 */
import IBatchCreateLoadUseCase from './IBatchCreateLoadUseCase';


/** @implements {IBatchCreateLoadUseCase} */
export default class BatchCreateLoadUseCase extends IBatchCreateLoadUseCase {
    constructor(aBatchCreateProcessor, aDataTransporer) {
        super(aBatchCreateProcessor, aDataTransporer);
    }

    async execute(param) {
        await this.aBatchCreateProcessor.process(param);
        
        return await this.aDataTransporer.transport();
    }
}