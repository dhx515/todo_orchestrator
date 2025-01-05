/**
 * @file DecreaseDataUseCase.js
 * @description Implement of Summary Data decrease Data Use Case
 */
import IDecreaseDataUseCase from './IDecreaseDataUseCase';


/** @implements {IDecreaseDataUseCase} */
export default class DecreaseDataUseCase extends IDecreaseDataUseCase {
    constructor(aDecreaseProcessor) {
        super(aDecreaseProcessor);
    }

    async execute(param, value = 1) {
        await this.aDecreaseProcessor.process(param, value);
    }
}