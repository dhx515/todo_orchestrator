/**
 * @file DeleteLoadUseCase.js
 * @description Implement of Done Data Delete Load Use Case
 */
import IDeleteLoadUseCase from './IDeleteDataUseCase';


/** @implements {IDeleteLoadUseCase} */
export default class DeleteLoadUseCase extends IDeleteLoadUseCase {
    constructor(deleteProcessor) {
        super(deleteProcessor);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
    }
}