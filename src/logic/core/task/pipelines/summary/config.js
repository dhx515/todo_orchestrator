/**
 * @file SummaryDataPipeline.js
 * @description Function to generate the Data Pipeline using a builder pattern.
 * This function initializes the data storage, processors, transporters, inspectors and use cases for the pipeline, 
 * and returns a fully constructed data pipeline.
 */
import PipelineBuilder from '../../../../shared/pipeline/PipelineBuilder';

import Processor from '@/logic/shared/hanlder/Processor';
import { fetchSummary } from './handlers/processor';

import ProcessUseCase from '@/logic/shared/usecase/ProcessUseCase';

export function SummaryDataPipelineConfig(state) {
    const fetchProcessor = new Processor(state, fetchSummary);

    const loadUseCase = new ProcessUseCase(fetchProcessor);

    return new PipelineBuilder()
        .addUseCase('loadData', loadUseCase)
        .build();
}