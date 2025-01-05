/**
 * @file IncreaseDataUseCase.js
 * @description Implement of Summary Data increase Data Use Case
 */
import IIncreaseDataUseCase from './IIncreaseDataUseCase';


/** @implements {IIncreaseDataUseCase} */
export default class IncreaseDataUseCase extends IIncreaseDataUseCase {
    constructor(aIncreaseProcessor) {
        super(aIncreaseProcessor);
    }

    async execute(param, value = 1) {
        await this.aIncreaseProcessor.process(param, value);
    }
}