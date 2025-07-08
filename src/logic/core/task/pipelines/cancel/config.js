/**
 * @file CancelDataPipeline.js
 * @description Function to generate the Data Pipeline using a builder pattern.
 * This function initializes the data storage, processors, transporters, inspectors and use cases for the pipeline, 
 * and returns a fully constructed data pipeline.
 */
import PipelineBuilder from '../../../../shared/pipeline/PipelineBuilder';

import Processor from '@/logic/shared/hanlder/Processor';
import { fetchCancel, singleCreateCancel, batchCreateCancel, singleDeleteCancel, batchDeleteCancel } from './handlers/processors';

import Inspector from '@/logic/shared/hanlder/Inspector';
import { inspectEmpty, inspectInitialized } from './handlers/inspector';

import ConditionalProcessUseCase from '@/logic/shared/usecase/ConditionalProcessUseCase';
import ValidatedProcessUseCase from '@/logic/shared/usecase/ValidatedProcessUseCase';

export function CancelDataPipelineConfig(state) {

    const fetchProcessor = new Processor(state, fetchCancel);
    const singleCreateProcessor = new Processor(state, singleCreateCancel);
    const batchCreateProcessor = new Processor(state, batchCreateCancel);
    const singleDeleteProcessor = new Processor(state, singleDeleteCancel);
    const batchDeleteProcessor = new Processor(state, batchDeleteCancel);

    const initialInspector = new Inspector(state, inspectInitialized);
    const emptyInspector = new Inspector(state, inspectEmpty);

    const cacheFirstLoadUseCase = new ConditionalProcessUseCase(emptyInspector, fetchProcessor);
    const singleCreateDataUseCase = new ValidatedProcessUseCase(initialInspector, singleCreateProcessor);
    const batchCreateDataUseCase = new ValidatedProcessUseCase(initialInspector, batchCreateProcessor);
    const singleDeleteDataUseCase = new ValidatedProcessUseCase(initialInspector, singleDeleteProcessor);
    const batchDeleteDataUseCase = new ValidatedProcessUseCase(initialInspector, batchDeleteProcessor);

    return new PipelineBuilder()
        .addUseCase('loadData', cacheFirstLoadUseCase)

        .addUseCase('singleCreate', singleCreateDataUseCase)
        .addUseCase('singleRevert', singleDeleteDataUseCase)
        .addUseCase('singleDelete', singleDeleteDataUseCase)

        .addUseCase('batchCreate', batchCreateDataUseCase)
        .addUseCase('batchRevert', batchDeleteDataUseCase)
        .addUseCase('batchDelete', batchDeleteDataUseCase)
        .build();
}