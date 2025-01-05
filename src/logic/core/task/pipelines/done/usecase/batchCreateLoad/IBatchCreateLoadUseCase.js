/**
 * @file IBatchCreateLoadUseCase.js
 * @description Interface of Done Data Batch Create Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IDoneBatchCreateProcessor from '../../processor/create/batch/IDoneBatchCreateProcessor';
import IDoneDataTransporter from '../../transporter/data/IDoneDataTransporter';


/** @interface */
export default class IBatchCreateLoadUseCase extends IUseCase {
    aBatchCreateProcessor = null;
    aDataTransporer = null;
    
    constructor(aBatchCreateProcessor, aDataTransporer) {
        super();

        this.#validateDoneBatchCreateProcessor(aBatchCreateProcessor);
        this.#validateDoneDataTransporter(aDataTransporer);

        this.aBatchCreateProcessor = aBatchCreateProcessor;
        this.aDataTransporer = aDataTransporer;
    }

    /**
     * Validates the create processor object.
     * @param {IDoneBatchCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneBatchCreateProcessor.
     */
    #validateDoneBatchCreateProcessor(target) {
        if (!(target instanceof IDoneBatchCreateProcessor)) {
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
     * @param {string[]} param
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}