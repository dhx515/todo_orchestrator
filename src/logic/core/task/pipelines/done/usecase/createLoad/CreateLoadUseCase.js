/**
 * @file CreateLoadUseCase.js
 * @description Implement of Done Data Create Load Use Case
 */
import ICreateLoadUseCase from './ICreateLoadUseCase';


/** @implements {ICreateLoadUseCase} */
export default class CreateLoadUseCase extends ICreateLoadUseCase {
    constructor(createProcessor, dataTransporer) {
        super(createProcessor, dataTransporer);
    }

    execute(param) {
        this.createProcessor.process(param);
        
        return this.dataTransporer.transport();
    }
}