/**
 * @file CancelDataPipeline.js
 * @description Function to generate the Data Pipeline using a builder pattern.
 * This function initializes the data storage, processors, transporters, inspectors and use cases for the pipeline, 
 * and returns a fully constructed data pipeline.
 */
import PipelineBuilderWithAutoCommand from '../../../../shared/pipeline/PipelineBuilderWithAutoCommand';
import DataStorage from './dataStorage/CancelDataStorage';
import FetchProcessor from './processor/fetch/CancelFetchProcessor';
import CreateProcessor from './processor/create/CancelCreateProcessor';
import DeleteProcessor from './processor/delete/CancelDeleteProcessor';
import InitialInspector from './inspector/initial/CancelInitialInspector';
import DataTransporter from './transporter/data/CancelDataTransporter';
import CacheFirstLoadUseCase from './usecase/cacheFirstLoad/CacheFirstLoadUseCase';
import CreateLoadUseCase from './usecase/createLoad/CreateLoadUseCase';
import DeleteLoadUseCase from './usecase/deleteLoad/DeleteLoadUseCase';

export function CancelDataPipelineConfig() {
    const dataStorage = new DataStorage();
    const fetchProcessor = new FetchProcessor(dataStorage);
    const createProcessor = new CreateProcessor(dataStorage);
    const deleteProcessor = new DeleteProcessor(dataStorage);
    const dataTransporer = new DataTransporter(dataStorage);
    const initialInspector = new InitialInspector(dataStorage);

    const cacheFirstLoadUseCase = new CacheFirstLoadUseCase(initialInspector, fetchProcessor, dataTransporer);
    const createLoadUseCase = new CreateLoadUseCase(createProcessor, dataTransporer);
    const deleteLoadUseCase = new DeleteLoadUseCase(deleteProcessor, dataTransporer);

    return new PipelineBuilderWithAutoCommand()
        .addUseCase('loadData', cacheFirstLoadUseCase)
        .addUseCase('createLoad', createLoadUseCase)
        .addUseCase('deleteLoad', deleteLoadUseCase)
        .addUseCase('revertLoad', deleteLoadUseCase)
        .build();
}