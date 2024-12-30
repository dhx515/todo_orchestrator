/**
 * @file CreateDataUseCase.js
 * @description Implement of Done Data Create Data Use Case
 */
import ICreateDataUseCase from './ICreateDataUseCase';


/** @implements {ICreateDataUseCase} */
export default class CreateDataUseCase extends ICreateDataUseCase {
    constructor(createProcessor) {
        super(createProcessor);
    }

    async execute(param) {
        await this.createProcessor.process(param);
    }
}