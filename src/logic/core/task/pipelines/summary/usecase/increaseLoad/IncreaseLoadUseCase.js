/**
 * @file IncreaseLoadUseCase.js
 * @description Implement of Summary Data increase Load Use Case
 */
import IIncreaseLoadUseCase from './IIncreaseLoadUseCase';


/** @implements {IIncreaseLoadUseCase} */
export default class IncreaseLoadUseCase extends IIncreaseLoadUseCase {
    constructor(increaseProcessor, dataTransporer) {
        super(increaseProcessor, dataTransporer);
    }

    execute(param) {
        this.increaseProcessor.process(param);
        
        return this.dataTransporer.transport();
    }
}