/**
 * @file IUseCase.js
 * @description Common Interface of UseCase
 */


/** @interface */
export default class IUseCase {

    /**
     * Processes the internal data and transforms it into a specific format or structure.
     * This method should be overridden in a subclass to implement the necessary use case logic.
     *
     * @abstract
     * @returns {*} - The transformed or processed data. The specific return type should be documented in the subclass based on the use case logic.
     * @throws {Error} If the method is not implemented in the subclass.
     * @example
     * class MyUseCase extends IUseCase {
     *   execute() {
     *     // Custom use case logic
     *     // Process the data first, then transform it into the desired format
     *     return transformedData;
     *   }
     * }
     */
    execute() {
        throw new Error('Method not implemented');
    }
}