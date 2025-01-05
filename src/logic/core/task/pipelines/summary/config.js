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
    const aDataStorage = new DataStorage();
    const aFetchProcessor = new FetchProcessor(aDataStorage);
    const aIncreaseProcessor = new IncreaseProcessor(aDataStorage);
    const aDecreaseProcessor = new DecreaseProcessor(aDataStorage);
    const aDataTransporer = new DataTransporter(aDataStorage);
    const aInitialInspector = new InitialInspector(aDataStorage);

    const aCacheFirstLoadUseCase = new CacheFirstLoadUseCase(aInitialInspector, aFetchProcessor, aDataTransporer);
    const aIncreateDataUseCase = new IncreaseDataUseCase(aIncreaseProcessor, aDataTransporer);
    const aDecreaseDataUseCase = new DecreaseDataUseCase(aDecreaseProcessor, aDataTransporer);

    return new PipelineBuilderWithAutoCommand()
        .addUseCase('loadData', aCacheFirstLoadUseCase)
        .addUseCase('increaseData', aIncreateDataUseCase)
        .addUseCase('decreaseData', aDecreaseDataUseCase)
        .build();
}