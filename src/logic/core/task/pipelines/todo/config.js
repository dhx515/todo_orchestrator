/**
 * @file TodoDataPipeline.js
 * @description Function to generate the Data Pipeline using a builder pattern.
 * This function initializes the data storage, processors, transporters, inspectors and use cases for the pipeline, 
 * and returns a fully constructed data pipeline.
 */
import PipelineBuilderWithAutoCommand from '../../../../shared/pipeline/PipelineBuilderWithAutoCommand';
import DataStorage from './dataStorage/TodoDataStorage';
import FetchProcessor from './processor/fetch/TodoFetchProcessor';
import SingleCreateProcessor from './processor/create/single/TodoSingleCreateProcessor';
import BatchCreateProcessor from './processor/create/batch/TodoBatchCreateProcessor';
import SingleDeleteProcessor from './processor/delete/single/TodoSingleDeleteProcessor';
import BatchDeleteProcessor from './processor/delete/batch/TodoBatchDeleteProcessor';
import InitialInspector from './inspector/initial/TodoInitialInspector';
import DataTransporter from './transporter/data/TodoDataTransporter';
import CacheFirstLoadUseCase from './usecase/cacheFirstLoad/CacheFirstLoadUseCase';
import SingleCreateLoadUseCase from './usecase/singleCreateLoad/SingleCreateLoadUseCase';
import BatchCreateLoadUseCase from './usecase/batchCreateLoad/BatchCreateLoadUseCase';
import SingleCreateDataUseCase from './usecase/singleCreateData/SingleCreateDataUseCase';
import BatchCreateDataUseCase from './usecase/batchCreateData/BatchCreateDataUseCase';
import SingleDeleteLoadUseCase from './usecase/singleDeleteLoad/SingleDeleteLoadUseCase';
import BatchDeleteLoadUseCase from './usecase/batchDeleteLoad/BatchDeleteLoadUseCase';
import SingleDeleteDataUseCase from './usecase/singleDeleteData/SingleDeleteDataUseCase';
import BatchDeleteDataUseCase from './usecase/batchDeleteData/BatchDeleteDataUseCase';

export function TodoDataPipelineConfig() {
    const aDataStorage = new DataStorage();
    const aFetchProcessor = new FetchProcessor(aDataStorage);
    const aSingleCreateProcessor = new SingleCreateProcessor(aDataStorage);
    const aBatchCreateProcessor = new BatchCreateProcessor(aDataStorage);
    const aSingleDeleteProcessor = new SingleDeleteProcessor(aDataStorage);
    const aBatchDeleteProcessor = new BatchDeleteProcessor(aDataStorage);
    const aDataTransporer = new DataTransporter(aDataStorage);
    const aInitialInspector = new InitialInspector(aDataStorage);

    const aCacheFirstLoadUseCase = new CacheFirstLoadUseCase(aInitialInspector, aFetchProcessor, aDataTransporer);
    const aSingleCreateLoadUseCase = new SingleCreateLoadUseCase(aSingleCreateProcessor, aDataTransporer);
    const aBatchCreateLoadUseCase = new BatchCreateLoadUseCase(aBatchCreateProcessor, aDataTransporer);
    const aSingleCreateDataUseCase = new SingleCreateDataUseCase(aSingleCreateProcessor);
    const aBatchCreateDataUseCase = new BatchCreateDataUseCase(aBatchCreateProcessor);
    const aSingleDeleteLoadUseCase = new SingleDeleteLoadUseCase(aSingleDeleteProcessor, aDataTransporer);
    const aBatchDeleteLoadUseCase = new BatchDeleteLoadUseCase(aBatchDeleteProcessor, aDataTransporer); 
    const aSingleDeleteDataUseCase = new SingleDeleteDataUseCase(aSingleDeleteProcessor);
    const aBatchDeleteDataUseCase = new BatchDeleteDataUseCase(aBatchDeleteProcessor);

    return new PipelineBuilderWithAutoCommand()
        .addUseCase('loadData', aCacheFirstLoadUseCase)

        .addUseCase('singleCreateLoad', aSingleCreateLoadUseCase)
        .addUseCase('singleCreateData', aSingleCreateDataUseCase)
        .addUseCase('singleDeleteLoad', aSingleDeleteLoadUseCase)
        .addUseCase('singleCancelLoad', aSingleDeleteLoadUseCase)
        .addUseCase('singleDoneLoad', aSingleDeleteLoadUseCase)
        .addUseCase('singleDeleteData', aSingleDeleteDataUseCase)

        .addUseCase('batchCreateLoad', aBatchCreateLoadUseCase)
        .addUseCase('batchCreateData', aBatchCreateDataUseCase)
        .addUseCase('batchDeleteLoad', aBatchDeleteLoadUseCase)
        .addUseCase('batchCancelLoad', aBatchDeleteLoadUseCase)
        .addUseCase('batchDoneLoad', aBatchDeleteLoadUseCase)
        .addUseCase('batchDeleteData', aBatchDeleteDataUseCase)
        .build();
}