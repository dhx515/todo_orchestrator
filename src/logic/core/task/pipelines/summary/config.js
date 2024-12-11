/**
 * @file SummaryDataPipeline.js
 * @description Function to generate the Data Pipeline using a builder pattern.
 * This function initializes the data storage, processors, transporters, inspectors and use cases for the pipeline, 
 * and returns a fully constructed data pipeline.
 */
import PipelineBuilderWithAutoCommand from '../../../../shared/pipeline/PipelineBuilderWithAutoCommand';
import DataStorage from './dataStorage/SummaryDataStorage';
import FetchProcessor from './processor/fetch/SummaryFetchProcessor';
import IncreaseProcessor from './processor/increase/SummaryIncreaseProcessor';
import DecreaseProcessor from './processor/decrease/SummaryDecreaseProcessor';
import InitialInspector from './inspector/initial/SummaryInitialInspector';
import DataTransporter from './transporter/data/SummaryDataTransporter';
import CacheFirstLoadUseCase from './usecase/cacheFirstLoad/CacheFirstLoadUseCase';
import IncreaseLoadUseCase from './usecase/increaseLoad/IncreaseLoadUseCase';
import DecreaseLoadUseCase from './usecase/decreaseLoad/DecreaseLoadUseCase';

export function SummaryDataPipelineConfig() {
    const dataStorage = new DataStorage();
    const fetchProcessor = new FetchProcessor(dataStorage);
    const increaseProcessor = new IncreaseProcessor(dataStorage);
    const decreaseProcessor = new DecreaseProcessor(dataStorage);
    const dataTransporer = new DataTransporter(dataStorage);
    const initialInspector = new InitialInspector(dataStorage);

    const cacheFirstLoadUseCase = new CacheFirstLoadUseCase(initialInspector, fetchProcessor, dataTransporer);
    const increaseLoadUseCase = new IncreaseLoadUseCase(increaseProcessor, dataTransporer);
    const decreaseLoadUseCase = new DecreaseLoadUseCase(decreaseProcessor, dataTransporer);

    return new PipelineBuilderWithAutoCommand()
        .addUseCase('loadData', cacheFirstLoadUseCase)
        .addUseCase('increaseLoad', increaseLoadUseCase)
        .addUseCase('decreaseLoad', decreaseLoadUseCase)
        .build();
}