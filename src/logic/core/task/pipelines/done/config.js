/**
 * @file DoneDataPipeline.js
 * @description Function to generate the Data Pipeline using a builder pattern.
 * This function initializes the data storage, processors, transporters, inspectors and use cases for the pipeline, 
 * and returns a fully constructed data pipeline.
 */
import PipelineBuilderWithAutoCommand from '../../../../shared/pipeline/PipelineBuilderWithAutoCommand';
import DataStorage from './dataStorage/DoneDataStorage';
import FetchProcessor from './processor/fetch/DoneFetchProcessor';
import CreateProcessor from './processor/create/DoneCreateProcessor';
import DeleteProcessor from './processor/delete/DoneDeleteProcessor';
import InitialInspector from './inspector/initial/DoneInitialInspector';
import DataTransporter from './transporter/data/DoneDataTransporter';
import CacheFirstLoadUseCase from './usecase/cacheFirstLoad/CacheFirstLoadUseCase';
import CreateLoadUseCase from './usecase/createLoad/CreateLoadUseCase';
import CreateDataUseCase from './usecase/createData/CreateDataUseCase';
import DeleteLoadUseCase from './usecase/deleteLoad/DeleteLoadUseCase';
import DeleteDataUseCase from './usecase/deleteData/DeleteDataUseCase';

export function DoneDataPipelineConfig() {
    const dataStorage = new DataStorage();
    const fetchProcessor = new FetchProcessor(dataStorage);
    const createProcessor = new CreateProcessor(dataStorage);
    const deleteProcessor = new DeleteProcessor(dataStorage);
    const dataTransporer = new DataTransporter(dataStorage);
    const initialInspector = new InitialInspector(dataStorage);

    const cacheFirstLoadUseCase = new CacheFirstLoadUseCase(initialInspector, fetchProcessor, dataTransporer);
    const createLoadUseCase = new CreateLoadUseCase(createProcessor, dataTransporer);
    const createDataUseCase = new CreateDataUseCase(createProcessor);
    const deleteLoadUseCase = new DeleteLoadUseCase(deleteProcessor, dataTransporer);
    const deleteDataUseCase = new DeleteDataUseCase(deleteProcessor);

    return new PipelineBuilderWithAutoCommand()
        .addUseCase('loadData', cacheFirstLoadUseCase)
        .addUseCase('createLoad', createLoadUseCase)
        .addUseCase('createData', createDataUseCase)
        .addUseCase('deleteLoad', deleteLoadUseCase)
        .addUseCase('revertLoad', deleteLoadUseCase)
        .addUseCase('deleteData', deleteDataUseCase)
        .build();
}