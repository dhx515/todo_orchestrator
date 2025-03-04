/**
 * @file IIncreaseDataUseCase.js
 * @description Interface of Summary Data increase Data Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ISummaryDataInspector from '../../inspector/data/ISummaryDataInspector';
import ISummaryIncreaseProcessor from '../../processor/increase/ISummaryIncreaseProcessor';


/** @interface */
export default class ICreateDataUseCase extends IUseCase {
    initialInspector = null;
    increaseProcessor = null;
    
    constructor(initialInspector, increaseProcessor) {
        super();

        this.#validateSummaryDataInspector(initialInspector);
        this.#validateSummaryIncreaseProcessor(increaseProcessor);

        this.initialInspector = initialInspector;
        this.increaseProcessor = increaseProcessor;
    }

    /**
     * Validates the initial insepctor object.
     * @param {ISummaryDataInspector} target - The initla inspector instance to validate.
     * @throws Will throw an error if the target is not an instance of ISummaryDataInspector.
     */
    #validateSummaryDataInspector(target) {
        if (!(target instanceof ISummaryDataInspector)) {
            throw new Error('Invalid Summary inspector object');
        }
    }

    /**
     * Validates the increase processor object.
     * @param {ISummaryIncreaseProcessor} target - The increase processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ISummaryIncreaseProcessor.
     */
    #validateSummaryIncreaseProcessor(target) {
        if (!(target instanceof ISummaryIncreaseProcessor)) {
            throw new Error('Invalid Summary processor object');
        }
    }

    /**
     * Executes the use case logic for this UseCase.
     * 
     * @abstract
     * @param {string} param
     * @param {number} value
     * @throws {Error} If the method is not implemented in the subclass.
     */
    async execute(param, value = 1) {
        const isValid = await this.initialInspector.inspect();
        if (!isValid) {
            throw new Error('Data validation failed.');
        }
        throw new Error('Method not implemented');
    }
}