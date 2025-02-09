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
import DataTransporter from './transporter/data/SummaryDataTransporter';
import InitialInspector from './inspector/data/SummaryInitialInspector';
import EmptyInspector from './inspector/data/SummaryEmptyInspector';
import ConditionalProcessLoadUseCase from '@/logic/shared/usecase/ConditionalProcessLoadUseCase';
import IncreaseDataUseCase from './usecase/increaseData/IncreaseDataUseCase';
import DecreaseDataUseCase from './usecase/decreaseData/DecreaseDataUseCase';

export function SummaryDataPipelineConfig() {
    const dataStorage = new DataStorage();
    const fetchProcessor = new FetchProcessor(dataStorage);
    const increaseProcessor = new IncreaseProcessor(dataStorage);
    const decreaseProcessor = new DecreaseProcessor(dataStorage);
    const dataTransporter = new DataTransporter(dataStorage);
    const initialInspector = new InitialInspector(dataStorage);
    const emptyInspector = new EmptyInspector(dataStorage);

    const cacheFirstLoadUseCase = new ConditionalProcessLoadUseCase(emptyInspector, fetchProcessor, dataTransporter);
    const increateDataUseCase = new IncreaseDataUseCase(initialInspector, increaseProcessor);
    const decreaseDataUseCase = new DecreaseDataUseCase(initialInspector, decreaseProcessor);

    return new PipelineBuilderWithAutoCommand()
        .addUseCase('loadData', cacheFirstLoadUseCase)
        .addUseCase('increaseData', increateDataUseCase)
        .addUseCase('decreaseData', decreaseDataUseCase)
        .build();
}