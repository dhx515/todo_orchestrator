/**
 * @file ICacheFirstLoadUseCase.js
 * @description Interface of Cancel Cache First Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ICancelInitialInspector from '../../inspector/initial/ICancelInitialInspector';
import ICancelFetchProcessor from '../../processor/fetch/ICancelFetchProcessor';
import ICancelDataTransporter from '../../transporter/data/ICancelDataTransporter';


/** @interface */
export default class ICacheFirstLoadUseCase extends IUseCase {
    initialInspector = null;
    fetchProcessor = null;
    dataTransporter = null;

    constructor(initialInspector, fetchProcessor, dataTransporter) {
        super();

        this.#validateCancelInitialInspector(initialInspector);
        this.#validateCancelFetchProcessor(fetchProcessor);
        this.#validateCancelDataTransporter(dataTransporter);

        this.initialInspector = initialInspector;
        this.fetchProcessor = fetchProcessor;
        this.dataTransporter = dataTransporter;
    }

    /**
     * Validates the initial inspector object.
     * @param {ICancelInitialInspector} target - The initial inspector instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelInitialInspector.
     */
    #validateCancelInitialInspector(target) {
        if (!(target instanceof ICancelInitialInspector)) {
            throw new Error('Invalid Cancel inspector object');
        }
    }

    /**
     * Validates the fetch processor object.
     * @param {ICancelFetchProcessor} target - The fetch processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelFetchProcessor.
     */
    #validateCancelFetchProcessor(target) {
        if (!(target instanceof ICancelFetchProcessor)) {
            throw new Error('Invalid Cancel processor object');
        }
    }

    /**
     * Validates the data transporter object.
     * @param {ICancelDataTransporter} target - The data transporter instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelDataTransporter.
     */
    #validateCancelDataTransporter(target) {
        if (!(target instanceof ICancelDataTransporter)) {
            throw new Error('Invalid Cancel transporter object');
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