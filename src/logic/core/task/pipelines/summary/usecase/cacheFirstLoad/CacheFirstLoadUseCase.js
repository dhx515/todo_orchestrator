/**
 * @file CacheFirstLoadUseCase.js
 * @description Implement of Summary Cache First Load Use Case
 */
import ICacheFirstLoadUseCase from './ICacheFirstLoadUseCase';


/** @implements {ICacheFirstLoadUseCase} */
export default class CacheFirstLoadUseCase extends ICacheFirstLoadUseCase {
    constructor(aInitialInspector, aFetchProcessor, aDataTransporer) {
        super(aInitialInspector, aFetchProcessor, aDataTransporer);
    }

    async execute(param) {
        if (!this.aInitialInspector.inspect()) {
            await this.aFetchProcessor.process(param);
        }
        return await this.aDataTransporer.transport();
    }
}