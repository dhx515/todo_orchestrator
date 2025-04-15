/**
 * @file ICommand.js
 * @description Common Interface of Command
 */
import IUseCase from './IUseCase';

/** @interface */
export default class ICommand {

    /**
     * Validates the usecase object.
     * @param {IUseCase} usecase - The usecase instance to validate.
     * @throws Will throw an error if the useCase is not an instance of IUseCase.
     */
    validateUseCase(useCase) {
        if (!(useCase instanceof IUseCase)) {
            throw new Error('Invalid UseCase object');
        }
    }

    /**
     * Executes the command with the provided parameters.
     * This method should be overridden in a subclass to implement the specific command logic.
     *
     * @abstract
     * @returns {*} - The result of the command execution. The specific return type should be documented in the subclass.
     * @throws {Error} If the method is not implemented in the subclass.
     * @example
     * class CreateUserCommand extends ICommand {
     *   execute(param) {
     *     // Custom command logic using the param
     *     return result;
     *   }
     * }
     */
    execute() {
        throw new Error('Method not implemented');
    }
}