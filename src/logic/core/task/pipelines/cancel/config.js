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
import InitialInspector from './inspector/initial/CancelInitialInspector';
import DataTransporter from './transporter/data/CancelDataTransporter';
import CacheFirstLoadUseCase from './usecase/cacheFirstLoad/CacheFirstLoadUseCase';
import SingleCreateLoadUseCase from './usecase/singleCreateLoad/SingleCreateLoadUseCase';
import BatchCreateLoadUseCase from './usecase/batchCreateLoad/BatchCreateLoadUseCase';
import SingleCreateDataUseCase from './usecase/singleCreateData/SingleCreateDataUseCase';
import BatchCreateDataUseCase from './usecase/batchCreateData/BatchCreateDataUseCase';
import SingleDeleteLoadUseCase from './usecase/singleDeleteLoad/SingleDeleteLoadUseCase';
import BatchDeleteLoadUseCase from './usecase/batchDeleteLoad/BatchDeleteLoadUseCase';
import SingleDeleteDataUseCase from './usecase/singleDeleteData/SingleDeleteDataUseCase';
import BatchDeleteDataUseCase from './usecase/batchDeleteData/BatchDeleteDataUseCase';

export function CancelDataPipelineConfig() {
    const dataStorage = new DataStorage();
    const fetchProcessor = new FetchProcessor(dataStorage);
    const singleCreateProcessor = new SingleCreateProcessor(dataStorage);
    const batchCreateProcessor = new BatchCreateProcessor(dataStorage);
    const singleDeleteProcessor = new SingleDeleteProcessor(dataStorage);
    const batchDeleteProcessor = new BatchDeleteProcessor(dataStorage);
    const dataTransporter = new DataTransporter(dataStorage);
    const initialInspector = new InitialInspector(dataStorage);

    const cacheFirstLoadUseCase = new CacheFirstLoadUseCase(initialInspector, fetchProcessor, dataTransporter);
    const singleCreateLoadUseCase = new SingleCreateLoadUseCase(singleCreateProcessor, dataTransporter);
    const batchCreateLoadUseCase = new BatchCreateLoadUseCase(batchCreateProcessor, dataTransporter);
    const singleCreateDataUseCase = new SingleCreateDataUseCase(singleCreateProcessor);
    const batchCreateDataUseCase = new BatchCreateDataUseCase(batchCreateProcessor);
    const singleDeleteLoadUseCase = new SingleDeleteLoadUseCase(singleDeleteProcessor, dataTransporter);
    const batchDeleteLoadUseCase = new BatchDeleteLoadUseCase(batchDeleteProcessor, dataTransporter); 
    const singleDeleteDataUseCase = new SingleDeleteDataUseCase(singleDeleteProcessor);
    const batchDeleteDataUseCase = new BatchDeleteDataUseCase(batchDeleteProcessor);

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
        .build();
}