/**
 * @file CacheFirstLoadUseCase.js
 * @description Implement of Todo Cache First Load Use Case
 */
import ICacheFirstLoadUseCase from './ICacheFirstLoadUseCase';


/** @implements {ICacheFirstLoadUseCase} */
export default class CacheFirstLoadUseCase extends ICacheFirstLoadUseCase {
    constructor(initialInspector, fetchProcessor, dataTransporer) {
        super(initialInspector, fetchProcessor, dataTransporer);
    }

    async execute(param) {
        if (!this.initialInspector.inspect()) {
            await this.fetchProcessor.process(param);
        }
        return this.dataTransporer.transport();
    }
}