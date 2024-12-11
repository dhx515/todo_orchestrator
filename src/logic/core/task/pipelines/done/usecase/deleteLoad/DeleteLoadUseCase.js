/**
 * @file DeleteLoadUseCase.js
 * @description Implement of Done Data Delete Load Use Case
 */
import IDeleteLoadUseCase from './IDeleteLoadUseCase';


/** @implements {IDeleteLoadUseCase} */
export default class DeleteLoadUseCase extends IDeleteLoadUseCase {
    constructor(deleteProcessor, dataTransporer) {
        super(deleteProcessor, dataTransporer);
    }

    async execute(param) {
        await this.deleteProcessor.process(param);
        
        return this.dataTransporer.transport();
    }
}