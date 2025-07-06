/**
 * @file SummaryDataPipeline.js
 * @description Function to generate the Data Pipeline using a builder pattern.
 * This function initializes the data storage, processors, transporters, inspectors and use cases for the pipeline, 
 * and returns a fully constructed data pipeline.
 */
import PipelineBuilder from '../../../../shared/pipeline/PipelineBuilder';
import DataStorage from './dataStorage/SummaryDataStorage';

import Processor from '@/logic/shared/hanlder/Processor';
import { fetchSummary } from './handlers/processor';

import Transporter from '@/logic/shared/hanlder/Transporter';
import { transportSummary } from './handlers/transporter';

import ProcessLoadUseCase from '@/logic/shared/usecase/ProcessLoadUseCase';

export function SummaryDataPipelineConfig() {
    const dataStorage = new DataStorage();

    const fetchProcessor = new Processor(dataStorage, fetchSummary);

    const dataTransporter = new Transporter(dataStorage, transportSummary);

    const cacheFirstLoadUseCase = new ProcessLoadUseCase(fetchProcessor, dataTransporter);

    return new PipelineBuilder()
        .addUseCase('loadData', cacheFirstLoadUseCase)
        .build();
}