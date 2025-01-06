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
import IncreaseDataUseCase from './usecase/increaseData/IncreaseDataUseCase';
import DecreaseDataUseCase from './usecase/decreaseData/DecreaseDataUseCase';

export function SummaryDataPipelineConfig() {
    const dataStorage = new DataStorage();
    const fetchProcessor = new FetchProcessor(dataStorage);
    const increaseProcessor = new IncreaseProcessor(dataStorage);
    const decreaseProcessor = new DecreaseProcessor(dataStorage);
    const dataTransporer = new DataTransporter(dataStorage);
    const initialInspector = new InitialInspector(dataStorage);

    const cacheFirstLoadUseCase = new CacheFirstLoadUseCase(initialInspector, fetchProcessor, dataTransporer);
    const increateDataUseCase = new IncreaseDataUseCase(increaseProcessor, dataTransporer);
    const decreaseDataUseCase = new DecreaseDataUseCase(decreaseProcessor, dataTransporer);

    return new PipelineBuilderWithAutoCommand()
        .addUseCase('loadData', cacheFirstLoadUseCase)
        .addUseCase('increaseData', increateDataUseCase)
        .addUseCase('decreaseData', decreaseDataUseCase)
        .build();
}