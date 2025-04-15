/**
 * @file IInspector.js
 * @description Common Interface of Inspector
 */
import IDataHandler from './IDataHander';


/** @interface */
export default class IInspector extends IDataHandler {
    constructor(dataStorage) {
        super(dataStorage);
    }

    /**
     * Executes the inspecting logic for this inspector.
     * This method should be overridden in a subclass if additional parameters are required.
     * 
     * @abstract
     * @throws {Error} If the method is not implemented in the subclass.
     * @example
     * class MyInspector extends IInspector {
     *   inspect(params) {
     *     // custom inspecting logic
     *   }
     */
    inspect() {
        throw new Error('Method not implemented');
    }
}