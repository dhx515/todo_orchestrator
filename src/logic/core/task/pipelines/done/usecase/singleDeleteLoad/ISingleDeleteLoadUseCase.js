/**
 * @file ISingleDeleteLoadUseCase.js
 * @description Interface of Done Data Single Delete Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IDoneSingleDeleteProcessor from '../../processor/delete/single/IDoneSingleDeleteProcessor';
import IDoneDataTransporter from '../../transporter/data/IDoneDataTransporter';


/** @interface */
export default class ISingleDeleteLoadUseCase extends IUseCase {
    aSingleDeleteProcessor = null;
    aDataTransporer = null;
    
    constructor(aSingleDeleteProcessor, aDataTransporer) {
        super();

        this.#validateDoneSingleDeleteProcessor(aSingleDeleteProcessor);
        this.#validateDoneDataTransporter(aDataTransporer);

        this.aSingleDeleteProcessor = aSingleDeleteProcessor;
        this.aDataTransporer = aDataTransporer;
    }

    /**
     * Validates the delete processor object.
     * @param {IDoneSingleDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneSingleDeleteProcessor.
     */
    #validateDoneSingleDeleteProcessor(target) {
        if (!(target instanceof IDoneSingleDeleteProcessor)) {
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