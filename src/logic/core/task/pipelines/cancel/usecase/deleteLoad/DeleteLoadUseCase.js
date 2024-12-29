/**
 * @file DeleteLoadUseCase.js
 * @description Implement of Cancel Data Delete Load Use Case
 */
import IDeleteLoadUseCase from './IDeleteLoadUseCase';


/** @implements {IDeleteLoadUseCase} */
export default class DeleteLoadUseCase extends IDeleteLoadUseCase {
    constructor(deleteProcessor, dataTransporer) {
        super(deleteProcessor, dataTransporer);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
        
        return await this.dataTransporer.transport();
    }
}