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
import { subscriptions } from './subscriptions';

export function TaskOrchestratorConfig(summaryState) {
    const todoDataPipeline = TodoDataPipelineConfig();
    const doneDataPipeline = DoneDataPipelineConfig();
    const cancelDataPipeline = CancelDataPipelineConfig();
    const summaryDataPipeline = SummaryDataPipelineConfig(summaryState);

    const orchestratorBuilder = new OrchestratorBuilder()
        .addPipeline('Todo', todoDataPipeline)
        .addPipeline('Done', doneDataPipeline)
        .addPipeline('Cancel', cancelDataPipeline)
        .addPipeline('Summary', summaryDataPipeline)
        .initializeCustomDispatcher(CustomEventDispatcher);
    
    subscriptions.forEach(({ event, handler, priority }) => {
        orchestratorBuilder.subscribe(event, handler, priority);
    });

    return orchestratorBuilder.build();
}