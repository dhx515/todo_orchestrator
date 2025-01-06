/**
 * @file CacheFirstLoadUseCase.js
 * @description Implement of Done Cache First Load Use Case
 */
import ICacheFirstLoadUseCase from './ICacheFirstLoadUseCase';


/** @implements {ICacheFirstLoadUseCase} */
export default class CacheFirstLoadUseCase extends ICacheFirstLoadUseCase {
    constructor(initialInspector, fetchProcessor, dataTransporter) {
        super(initialInspector, fetchProcessor, dataTransporter);
    }

    async execute(param) {
        if (!this.initialInspector.inspect()) {
            await this.fetchProcessor.process(param);
        }
        return await this.dataTransporter.transport();
    }
}