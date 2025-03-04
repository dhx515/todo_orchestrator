/**
 * @file IncreaseDataUseCase.js
 * @description Implement of Summary Data increase Data Use Case
 */
import IIncreaseDataUseCase from './IIncreaseDataUseCase';


/** @implements {IIncreaseDataUseCase} */
export default class IncreaseDataUseCase extends IIncreaseDataUseCase {
    constructor(initialInspector, increaseProcessor) {
        super(initialInspector, increaseProcessor);
    }

    async execute(param, value = 1) {
        const isValid = await this.initialInspector.inspect();
        if (!isValid) {
            throw new Error('Data validation failed.');
        }
        await this.increaseProcessor.process(param, value);
    }
}