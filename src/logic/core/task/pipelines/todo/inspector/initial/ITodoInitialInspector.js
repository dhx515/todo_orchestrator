/**
 * @file ITodoInitialInspector.js
 * @description Interface of Todo Initial Inspector
 */
import IInspector from '../../../../../../shared/interfaces/IInspector';


/** @interface */
export default class ITodoInitialInspector extends IInspector {
    constructor(dataStorage){
        super(dataStorage);
    }

    /**
     * Executes the inspecting logic for this inspector.
     * 
     * @abstract
     * @returns {boolean}
     * @throws {Error} If the method is not implemented in the subclass.
     */
    inspect() {
        throw new Error('Method not implemented');
    }
}