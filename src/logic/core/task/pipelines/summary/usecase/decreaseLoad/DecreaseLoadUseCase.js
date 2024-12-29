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

    async execute(param) {
        await this.decreaseProcessor.process(param);
        
        return await this.dataTransporer.transport();
    }
}