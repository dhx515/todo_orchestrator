/**
 * @file TodoDataPipeline.js
 * @description Function to generate the Data Pipeline using a builder pattern.
 * This function initializes the data storage, processors, transporters, inspectors and use cases for the pipeline, 
 * and returns a fully constructed data pipeline.
 */
import PipelineBuilder from '../../../../shared/pipeline/PipelineBuilder';

import Processor from '@/logic/shared/hanlder/Processor';
import { fetchTodo, singleCreateTodo, batchCreateTodo, singleDeleteTodo, batchDeleteTodo } from '@/logic/core/task/pipelines/todo/handlers/processor';

import Inspector from '@/logic/shared/hanlder/Inspector';
import { inspectEmpty, inspectInitialized } from './handlers/inspector';

import ValidatedProcessUseCase from '@/logic/shared/usecase/ValidatedProcessUseCase';
import ConditionalProcessUseCase from '@/logic/shared/usecase/ConditionalProcessUseCase';

export function TodoDataPipelineConfig(state) {
    const fetchProcessor = new Processor(state, fetchTodo);
    const singleCreateProcessor = new Processor(state, singleCreateTodo);
    const batchCreateProcessor = new Processor(state, batchCreateTodo);
    const singleDeleteProcessor = new Processor(state, singleDeleteTodo);
    const batchDeleteProcessor = new Processor(state, batchDeleteTodo);
    const initialInspector = new Inspector(state, inspectInitialized);
    const emptyInspector = new Inspector(state, inspectEmpty);

    const cacheFirstLoadUseCase = new ConditionalProcessUseCase(emptyInspector, fetchProcessor);
    const singleCreateDataUseCase = new ValidatedProcessUseCase(initialInspector, singleCreateProcessor);
    const batchCreateDataUseCase = new ValidatedProcessUseCase(initialInspector, batchCreateProcessor);
    const singleDeleteDataUseCase = new ValidatedProcessUseCase(initialInspector,singleDeleteProcessor);
    const batchDeleteDataUseCase = new ValidatedProcessUseCase(initialInspector, batchDeleteProcessor);

    return new PipelineBuilder()
        .addUseCase('loadData', cacheFirstLoadUseCase)

        .addUseCase('singleCreate', singleCreateDataUseCase)
        .addUseCase('singleCancel', singleDeleteDataUseCase)
        .addUseCase('singleDone', singleDeleteDataUseCase)
        .addUseCase('singleDelete', singleDeleteDataUseCase)

        .addUseCase('batchCreate', batchCreateDataUseCase)
        .addUseCase('batchCancel', batchDeleteDataUseCase)
        .addUseCase('batchDone', batchDeleteDataUseCase)
        .addUseCase('batchDelete', batchDeleteDataUseCase)
        .build();
}