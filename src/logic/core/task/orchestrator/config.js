/**
 * @file config.js
 * @description Function to generate the Data Pipeline Orchestrator using a builder pattern.
 * This function initializes the pipelines and dispatcher for the orchestrator, 
 * and returns a fully constructed orchestrator.
 */
import OrchestratorBuilder from '@/logic/shared/orchestrator/OrchestratorBuilder';
import { TodoDataPipelineConfig } from '../pipelines/todo/config';
import { DoneDataPipelineConfig } from '../pipelines/done/config';
import { CancelDataPipelineConfig } from '../pipelines/cancel/config';
import { SummaryDataPipelineConfig } from '../pipelines/summary/config';

import CustomEventDispatcher from './CustomEventDispatcher';

export function TaskOrchestartorConfig() {
    const todoDataPipeline = TodoDataPipelineConfig();
    const doneDataPipeline = DoneDataPipelineConfig();
    const cancelDataPipeline = CancelDataPipelineConfig();
    const summaryDataPipeline = SummaryDataPipelineConfig();

    return new OrchestratorBuilder()
        .addPipeline('Todo', todoDataPipeline)
        .addPipeline('Done', doneDataPipeline)
        .addPipeline('Cancel', cancelDataPipeline)
        .addPipeline('Summary', summaryDataPipeline)
        .initializeCustomDispatcher(CustomEventDispatcher)
        .subscribe('Todo:createLoad', 'Summary:increaseLoad', 10)

        .subscribe('Todo:cancelLoad', 'Summary:decreaseLoad', 5)
        .subscribe('Todo:cancelLoad', 'Cancel:createLoad', 10)
        
        .subscribe('Todo:doneLoad', 'Summary:decreaseLoad', 5)
        .subscribe('Todo:doneLoad', 'Done:createLoad', 10)
        
        .subscribe('Cancel:createLoad', 'Summary:increaseLoad', 5)
        .subscribe('Cancel:deleteLoad', 'Summary:decreaseLoad', 5)

        .subscribe('Done:createLoad', 'Summary:increaseLoad', 5)
        .subscribe('Done:deleteLoad', 'Summary:decreaseLoad', 5)

        .build();
}