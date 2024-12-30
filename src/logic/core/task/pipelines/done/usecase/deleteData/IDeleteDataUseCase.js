/**
 * @file IDeleteDataUseCase.js
 * @description Interface of Done Data Delete Data Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import IDoneDeleteProcessor from '../../processor/delete/IDoneDeleteProcessor';


/** @interface */
export default class IDeleteDataUseCase extends IUseCase {
    deleteProcessor = null;
    
    constructor(deleteProcessor) {
        super();

        this.#validateDoneDeleteProcessor(deleteProcessor);

        this.deleteProcessor = deleteProcessor;
    }

    /**
     * Validates the delete processor object.
     * @param {IDoneDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneDeleteProcessor.
     */
    #validateDoneDeleteProcessor(target) {
        if (!(target instanceof IDoneDeleteProcessor)) {
            throw new Error('Invalid Done processor object');
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