/**
 * @file DecreaseDataUseCase.js
 * @description Implement of Summary Data decrease Data Use Case
 */
import IDecreaseDataUseCase from './IDecreaseDataUseCase';


/** @implements {IDecreaseDataUseCase} */
export default class DecreaseDataUseCase extends IDecreaseDataUseCase {
    constructor(decreaseProcessor) {
        super(decreaseProcessor);
    }

    async execute(param) {
        await this.decreaseProcessor.process(param);
    }
}