/**
 * @file DecreaseLoadUseCase.js
 * @description Implement of Summary Data decrease Load Use Case
 */
import IDecreaseLoadUseCase from './IDecreaseLoadUseCase';


/** @implements {IDecreaseLoadUseCase} */
export default class DecreaseLoadUseCase extends IDecreaseLoadUseCase {
    constructor(decreaseProcessor, dataTransporer) {
        super(decreaseProcessor, dataTransporer);
    }

    execute(param) {
        this.decreaseProcessor.process(param);
        
        return this.dataTransporer.transport();
    }
}