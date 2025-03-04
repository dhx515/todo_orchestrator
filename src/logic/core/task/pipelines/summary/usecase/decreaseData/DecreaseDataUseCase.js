/**
 * @file DecreaseDataUseCase.js
 * @description Implement of Summary Data decrease Data Use Case
 */
import IDecreaseDataUseCase from './IDecreaseDataUseCase';


/** @implements {IDecreaseDataUseCase} */
export default class DecreaseDataUseCase extends IDecreaseDataUseCase {
    constructor(initialInspector, decreaseProcessor) {
        super(initialInspector, decreaseProcessor);
    }

    async execute(param, value = 1) {
        const isValid = await this.initialInspector.inspect();
        if (!isValid) {
            throw new Error('Data validation failed.');
        }
        await this.decreaseProcessor.process(param, value);
    }
}