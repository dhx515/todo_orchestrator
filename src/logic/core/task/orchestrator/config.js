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

export function TaskOrchestratorConfig() {
    const aTodoDataPipeline = TodoDataPipelineConfig();
    const aDoneDataPipeline = DoneDataPipelineConfig();
    const aCancelDataPipeline = CancelDataPipelineConfig();
    const aSummaryDataPipeline = SummaryDataPipelineConfig();

    const orchestratorBuilder = new OrchestratorBuilder()
        .addPipeline('Todo', aTodoDataPipeline)
        .addPipeline('Done', aDoneDataPipeline)
        .addPipeline('Cancel', aCancelDataPipeline)
        .addPipeline('Summary', aSummaryDataPipeline)
        .initializeCustomDispatcher(CustomEventDispatcher);
    
    subscriptions.forEach(({ event, handler, priority }) => {
        orchestratorBuilder.subscribe(event, handler, priority);
    });

    return orchestratorBuilder.build();
}