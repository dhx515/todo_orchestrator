/**
 * @file IDecreaseDataUseCase.js
 * @description Interface of Summary Data decrease Data Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ISummaryDataInspector from '../../inspector/data/ISummaryDataInspector';
import ISummaryDecreaseProcessor from '../../processor/decrease/ISummaryDecreaseProcessor';


/** @interface */
export default class IDecreaseDataUseCase extends IUseCase {
    initialInspector = null;
    decreaseProcessor = null;
    
    constructor(initialInspector, decreaseProcessor) {
        super();

        this.#validateSummaryDataInspector(initialInspector);
        this.#validateSummaryDecreaseProcessor(decreaseProcessor);

        this.initialInspector = initialInspector;
        this.decreaseProcessor = decreaseProcessor;
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
     * Validates the decrease processor object.
     * @param {ISummaryDecreaseProcessor} target - The decrease processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ISummaryDecreaseProcessor.
     */
    #validateSummaryDecreaseProcessor(target) {
        if (!(target instanceof ISummaryDecreaseProcessor)) {
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
    execute(param, value = 1) {
        throw new Error('Method not implemented');
    }
}