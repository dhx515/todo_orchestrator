/**
 * @file IDoneInitialInspector.js
 * @description Interface of Done Initial Inspector
 */
import IInspector from '@/logic/shared/interfaces/IInspector';


/** @interface */
export default class IDoneInitialInspector extends IInspector {
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