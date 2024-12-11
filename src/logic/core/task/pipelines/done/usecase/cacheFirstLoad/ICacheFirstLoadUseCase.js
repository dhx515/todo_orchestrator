/**
 * @file ICacheFirstLoadUseCase.js
 * @description Interface of Done Cache First Load Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import IDoneInitialInspector from '../../inspector/initial/IDoneInitialInspector';
import IDoneFetchProcessor from '../../processor/fetch/IDoneFetchProcessor';
import IDoneDataTransporter from '../../transporter/data/IDoneDataTransporter';


/** @interface */
export default class ICacheFirstLoadUseCase extends IUseCase {
    initialInspector = null;
    fetchProcessor = null;
    dataTransporer = null;

    constructor(initialInspector, fetchProcessor, dataTransporer) {
        super();

        this.#validateDoneInitialInspector(initialInspector);
        this.#validateDoneFetchProcessor(fetchProcessor);
        this.#validateDoneDataTransporter(dataTransporer);

        this.initialInspector = initialInspector;
        this.fetchProcessor = fetchProcessor;
        this.dataTransporer = dataTransporer;
    }

    /**
     * Validates the initial inspector object.
     * @param {IDoneInitialInspector} target - The initial inspector instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneInitialInspector.
     */
    #validateDoneInitialInspector(target) {
        if (!(target instanceof IDoneInitialInspector)) {
            throw new Error('Invalid Done inspector object');
        }
    }

    /**
     * Validates the fetch processor object.
     * @param {IDoneFetchProcessor} target - The fetch processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneFetchProcessor.
     */
    #validateDoneFetchProcessor(target) {
        if (!(target instanceof IDoneFetchProcessor)) {
            throw new Error('Invalid Done processor object');
        }
    }

    /**
     * Validates the data transporter object.
     * @param {IDoneDataTransporter} target - The data transporter instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneDataTransporter.
     */
    #validateDoneDataTransporter(target) {
        if (!(target instanceof IDoneDataTransporter)) {
            throw new Error('Invalid Done transporter object');
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