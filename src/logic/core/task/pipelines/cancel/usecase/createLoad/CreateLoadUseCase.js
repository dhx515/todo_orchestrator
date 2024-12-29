/**
 * @file CreateLoadUseCase.js
 * @description Implement of Cancel Data Create Load Use Case
 */
import ICreateLoadUseCase from './ICreateLoadUseCase';


/** @implements {ICreateLoadUseCase} */
export default class CreateLoadUseCase extends ICreateLoadUseCase {
    constructor(createProcessor, dataTransporer) {
        super(createProcessor, dataTransporer);
    }

    async execute(param) {
        await this.createProcessor.process(param);
        
        return await this.dataTransporer.transport();
    }
}