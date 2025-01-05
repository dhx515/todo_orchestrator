/**
 * @file ISingleCreateLoadUseCase.js
 * @description Interface of Done Data Single Create Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IDoneSingleCreateProcessor from '../../processor/create/single/IDoneSingleCreateProcessor';
import IDoneDataTransporter from '../../transporter/data/IDoneDataTransporter';


/** @interface */
export default class ISingleCreateLoadUseCase extends IUseCase {
    aSingleCreateProcessor = null;
    aDataTransporer = null;
    
    constructor(aSingleCreateProcessor, aDataTransporer) {
        super();

        this.#validateDoneSingleCreateProcessor(aSingleCreateProcessor);
        this.#validateDoneDataTransporter(aDataTransporer);

        this.aSingleCreateProcessor = aSingleCreateProcessor;
        this.aDataTransporer = aDataTransporer;
    }

    /**
     * Validates the create processor object.
     * @param {IDoneSingleCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneSingleCreateProcessor.
     */
    #validateDoneSingleCreateProcessor(target) {
        if (!(target instanceof IDoneSingleCreateProcessor)) {
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
     * @param {string} param
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}