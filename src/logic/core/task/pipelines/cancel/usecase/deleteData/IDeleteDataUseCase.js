/**
 * @file IDeleteDataUseCase.js
 * @description Interface of Cancel Data Delete Data Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ICancelDeleteProcessor from '../../processor/delete/ICancelDeleteProcessor';


/** @interface */
export default class IDeleteDataUseCase extends IUseCase {
    deleteProcessor = null;
    
    constructor(deleteProcessor) {
        super();

        this.#validateCancelDeleteProcessor(deleteProcessor);

        this.deleteProcessor = deleteProcessor;
    }

    /**
     * Validates the delete processor object.
     * @param {ICancelDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelDeleteProcessor.
     */
    #validateCancelDeleteProcessor(target) {
        if (!(target instanceof ICancelDeleteProcessor)) {
            throw new Error('Invalid Cancel processor object');
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