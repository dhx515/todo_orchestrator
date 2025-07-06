/**
 * @file TodoDataPipeline.js
 * @description Function to generate the Data Pipeline using a builder pattern.
 * This function initializes the data storage, processors, transporters, inspectors and use cases for the pipeline, 
 * and returns a fully constructed data pipeline.
 */
import PipelineBuilder from '../../../../shared/pipeline/PipelineBuilder';

import DataStorage from './dataStorage/TodoDataStorage';

import Processor from '@/logic/shared/hanlder/Processor';
import { fetchTodo, singleCreateTodo, batchCreateTodo, singleDeleteTodo, batchDeleteTodo } from '@/logic/core/task/pipelines/todo/handlers/processor';

import Transporter from '@/logic/shared/hanlder/Transporter';
import { transportTodo } from './handlers/transporter';

import Inspector from '@/logic/shared/hanlder/Inspector';
import { inspectEmpty, inspectInitialized } from './handlers/inspector';

import ValidatedProcessUseCase from '@/logic/shared/usecase/ValidatedProcessUseCase';
import ValidatedProcessLoadUseCase from '@/logic/shared/usecase/ValidatedProcessLoadUseCase';
import ConditionalProcessLoadUseCase from '@/logic/shared/usecase/ConditionalProcessLoadUseCase';

export function TodoDataPipelineConfig() {
    const dataStorage = new DataStorage();
    const fetchProcessor = new Processor(dataStorage, fetchTodo);
    const singleCreateProcessor = new Processor(dataStorage, singleCreateTodo);
    const batchCreateProcessor = new Processor(dataStorage, batchCreateTodo);
    const singleDeleteProcessor = new Processor(dataStorage, singleDeleteTodo);
    const batchDeleteProcessor = new Processor(dataStorage, batchDeleteTodo);
    const dataTransporter = new Transporter(dataStorage, transportTodo);
    const initialInspector = new Inspector(dataStorage, inspectInitialized);
    const emptyInspector = new Inspector(dataStorage, inspectEmpty);

    const cacheFirstLoadUseCase = new ConditionalProcessLoadUseCase(emptyInspector, fetchProcessor, dataTransporter);
    const singleCreateLoadUseCase = new ValidatedProcessLoadUseCase(initialInspector, singleCreateProcessor, dataTransporter);
    const batchCreateLoadUseCase = new ValidatedProcessLoadUseCase(initialInspector, batchCreateProcessor, dataTransporter);
    const singleCreateDataUseCase = new ValidatedProcessUseCase(initialInspector, singleCreateProcessor);
    const batchCreateDataUseCase = new ValidatedProcessUseCase(initialInspector, batchCreateProcessor);
    const singleDeleteLoadUseCase = new ValidatedProcessLoadUseCase(initialInspector, singleDeleteProcessor, dataTransporter);
    const batchDeleteLoadUseCase = new ValidatedProcessLoadUseCase(initialInspector, batchDeleteProcessor, dataTransporter); 
    const singleDeleteDataUseCase = new ValidatedProcessUseCase(initialInspector,singleDeleteProcessor);
    const batchDeleteDataUseCase = new ValidatedProcessUseCase(initialInspector, batchDeleteProcessor);

    return new PipelineBuilder()
        .addUseCase('loadData', cacheFirstLoadUseCase)

        .addUseCase('singleCreateLoad', singleCreateLoadUseCase)
        .addUseCase('singleCreateData', singleCreateDataUseCase)
        .addUseCase('singleDeleteLoad', singleDeleteLoadUseCase)
        .addUseCase('singleCancelLoad', singleDeleteLoadUseCase)
        .addUseCase('singleDoneLoad', singleDeleteLoadUseCase)
        .addUseCase('singleDeleteData', singleDeleteDataUseCase)

        .addUseCase('batchCreateLoad', batchCreateLoadUseCase)
        .addUseCase('batchCreateData', batchCreateDataUseCase)
        .addUseCase('batchDeleteLoad', batchDeleteLoadUseCase)
        .addUseCase('batchCancelLoad', batchDeleteLoadUseCase)
        .addUseCase('batchDoneLoad', batchDeleteLoadUseCase)
        .addUseCase('batchDeleteData', batchDeleteDataUseCase)
        .build();
}