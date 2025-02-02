/**
 * @file IncreaseDataUseCase.js
 * @description Implement of Summary Data increase Data Use Case
 */
import IIncreaseDataUseCase from './IIncreaseDataUseCase';


/** @implements {IIncreaseDataUseCase} */
export default class IncreaseDataUseCase extends IIncreaseDataUseCase {
    constructor(increaseProcessor) {
        super(increaseProcessor);
    }

    async execute(param, value = 1) {
        await this.increaseProcessor.process(param, value);
    }
}