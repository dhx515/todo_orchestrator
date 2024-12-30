/**
 * @file DeleteDataUseCase.js
 * @description Implement of Cancel Data Delete Data Use Case
 */
import IDeleteDataUseCase from './IDeleteDataUseCase';


/** @implements {IDeleteDataUseCase} */
export default class DeleteDataUseCase extends IDeleteDataUseCase {
    constructor(deleteProcessor) {
        super(deleteProcessor);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
    }
}