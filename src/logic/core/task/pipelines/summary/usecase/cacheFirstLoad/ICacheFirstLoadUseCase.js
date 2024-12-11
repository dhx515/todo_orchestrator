/**
 * @file ICacheFirstLoadUseCase.js
 * @description Interface of Summary Cache First Load Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ISummaryInitialInspector from '../../inspector/initial/ISummaryInitialInspector';
import ISummaryFetchProcessor from '../../processor/fetch/ISummaryFetchProcessor';
import ISummaryDataTransporter from '../../transporter/data/ISummaryDataTransporter';


/** @interface */
export default class ICacheFirstLoadUseCase extends IUseCase {
    initialInspector = null;
    fetchProcessor = null;
    dataTransporer = null;

    constructor(initialInspector, fetchProcessor, dataTransporer) {
        super();

        this.#validateSummaryInitialInspector(initialInspector);
        this.#validateSummaryFetchProcessor(fetchProcessor);
        this.#validateSummaryDataTransporter(dataTransporer);

        this.initialInspector = initialInspector;
        this.fetchProcessor = fetchProcessor;
        this.dataTransporer = dataTransporer;
    }

    /**
     * Validates the initial inspector object.
     * @param {ISummaryInitialInspector} target - The initial inspector instance to validate.
     * @throws Will throw an error if the target is not an instance of ISummaryInitialInspector.
     */
    #validateSummaryInitialInspector(target) {
        if (!(target instanceof ISummaryInitialInspector)) {
            throw new Error('Invalid Summary inspector object');
        }
    }

    /**
     * Validates the fetch processor object.
     * @param {ISummaryFetchProcessor} target - The fetch processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ISummaryFetchProcessor.
     */
    #validateSummaryFetchProcessor(target) {
        if (!(target instanceof ISummaryFetchProcessor)) {
            throw new Error('Invalid Summary processor object');
        }
    }

    /**
     * Validates the data transporter object.
     * @param {ISummaryDataTransporter} target - The data transporter instance to validate.
     * @throws Will throw an error if the target is not an instance of ISummaryDataTransporter.
     */
    #validateSummaryDataTransporter(target) {
        if (!(target instanceof ISummaryDataTransporter)) {
            throw new Error('Invalid Summary transporter object');
        }
    }

    /**
     * Executes the use case logic for this UseCase.
     * 
     * @abstract
     * @param {object} param
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}