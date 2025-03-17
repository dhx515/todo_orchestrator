/**
 * @file CancelDataPipeline.js
 * @description Function to generate the Data Pipeline using a builder pattern.
 * This function initializes the data storage, processors, transporters, inspectors and use cases for the pipeline, 
 * and returns a fully constructed data pipeline.
 */
import PipelineBuilderWithAutoCommand from '../../../../shared/pipeline/PipelineBuilderWithAutoCommand';
import DataStorage from './dataStorage/CancelDataStorage';
import FetchProcessor from './processor/fetch/CancelFetchProcessor';
import SingleCreateProcessor from './processor/create/single/CancelSingleCreateProcessor';
import BatchCreateProcessor from './processor/create/batch/CancelBatchCreateProcessor';
import SingleDeleteProcessor from './processor/delete/single/CancelSingleDeleteProcessor';
import BatchDeleteProcessor from './processor/delete/batch/CancelBatchDeleteProcessor';
import InitialInspector from './inspector/data/CancelInitialInspector';
import EmptyInspector from './inspector/data/CancelEmptyInspector';
import DataTransporter from './transporter/data/CancelDataTransporter';
import ValidatedProcessUseCase from '@/logic/shared/usecase/ValidatedProcessUseCase';
import ValidatedProcessLoadUseCase from '@/logic/shared/usecase/ValidatedProcessLoadUseCase';
import ConditionalProcessLoadUseCase from '@/logic/shared/usecase/ConditionalProcessLoadUseCase';

export function CancelDataPipelineConfig() {
    const dataStorage = new DataStorage();
    const fetchProcessor = new FetchProcessor(dataStorage);
    const singleCreateProcessor = new SingleCreateProcessor(dataStorage);
    const batchCreateProcessor = new BatchCreateProcessor(dataStorage);
    const singleDeleteProcessor = new SingleDeleteProcessor(dataStorage);
    const batchDeleteProcessor = new BatchDeleteProcessor(dataStorage);
    const dataTransporter = new DataTransporter(dataStorage);
    const initialInspector = new InitialInspector(dataStorage);
    const emptyInspector = new EmptyInspector(dataStorage);

    const cacheFirstLoadUseCase = new ConditionalProcessLoadUseCase(emptyInspector, fetchProcessor, dataTransporter);
    const singleCreateLoadUseCase = new ValidatedProcessLoadUseCase(initialInspector, singleCreateProcessor, dataTransporter);
    const batchCreateLoadUseCase = new ValidatedProcessLoadUseCase(initialInspector, batchCreateProcessor, dataTransporter);
    const singleCreateDataUseCase = new ValidatedProcessUseCase(initialInspector, singleCreateProcessor);
    const batchCreateDataUseCase = new ValidatedProcessUseCase(initialInspector, batchCreateProcessor);
    const singleDeleteLoadUseCase = new ValidatedProcessLoadUseCase(initialInspector, singleDeleteProcessor, dataTransporter);
    const batchDeleteLoadUseCase = new ValidatedProcessLoadUseCase(initialInspector, batchDeleteProcessor, dataTransporter);
    const singleDeleteDataUseCase = new ValidatedProcessUseCase(initialInspector, singleDeleteProcessor);
    const batchDeleteDataUseCase = new ValidatedProcessUseCase(initialInspector, batchDeleteProcessor);

    return new PipelineBuilderWithAutoCommand()
        .addUseCase('loadData', cacheFirstLoadUseCase)

        .addUseCase('singleCreateLoad', singleCreateLoadUseCase)
        .addUseCase('singleCreateData', singleCreateDataUseCase)
        .addUseCase('singleDeleteLoad', singleDeleteLoadUseCase)
        .addUseCase('singleRevertLoad', singleDeleteLoadUseCase)
        .addUseCase('singleDeleteData', singleDeleteDataUseCase)

        .addUseCase('batchCreateLoad', batchCreateLoadUseCase)
        .addUseCase('batchCreateData', batchCreateDataUseCase)
        .addUseCase('batchDeleteLoad', batchDeleteLoadUseCase)
        .addUseCase('batchRevertLoad', batchDeleteLoadUseCase)
        .addUseCase('batchDeleteData', batchDeleteDataUseCase)

        .addStatusUpdateSheet([
            'singleCreateLoad', 'singleCreateData',
            'singleDeleteLoad', 'singleRevertLoad',
            'singleDeleteData',
            
            'batchCreateLoad', 'batchCreateData',
            'batchDeleteLoad', 'batchRevertLoad',
            'batchDeleteData'
        ])
        .build();
}