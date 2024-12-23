# Todo Orchestrator

Todo Orchestrator is a Vue.js application that helps you manage your tasks efficiently. It includes features for creating, updating, and deleting tasks, as well as viewing tasks in different states such as Todo, Done, and Canceled.

## Features

- **Todo Management**: Create, update, and delete tasks.
- **Task States**: View tasks in different states (Todo, Done, Canceled).
- **Summary View**: Get a quick overview of the number of tasks in each state.

## Project Structure

```
src/
├── components/
│   ├── MainPage.vue
│   ├── SectionSummary.vue
│   ├── SectionJobContents/
│   │   ├── SectionJobContents.vue
│   │   ├── TodoContents/
│   │   │   └── TodoContents.vue
│   │   ├── DoneContents.vue
│   │   └── CanceledContents.vue
├── App.vue
├── main.js
├── logic/
│   ├── core/
│   │   ├── task/
│   │   │   ├── orchestrator/
│   │   │   │   └── config.js
│   │   │   ├── pipelines/
│   │   │   │   ├── cancel/
│   │   │   │   │   └── config.js
│   │   │   │   ├── done/
│   │   │   │   │   └── config.js
│   │   │   │   ├── summary/
│   │   │   │   │   └── config.js
│   │   │   │   └── todo/
│   │   │   │       └── config.js
│   ├── shared/
│   │   ├── orchestrator/
│   │   ├── pipeline/
│   │   └── utils/
tests/
├── components/
│   ├── SectionSummary.spec.js
│   ├── SectionJobContents.spec.js
│   ├── TodoContents.spec.js
│   ├── DoneContents.spec.js
│   └── CanceledContents.spec.js
└── logic/
```

## Setup

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/todo_orchestrator.git
    cd todo_orchestrator
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the development server**:
    ```sh
    npm run serve
    ```

4. **Run unit tests**:
    ```sh
    npm run test:unit
    ```

## Usage

- **View Tasks**: Navigate to the main page to view tasks in different states.
- **Add Task**: Use the input field and button to add a new task.
- **Update Task**: Click on a task to mark it as done or cancel it.
- **Delete Task**: Click the delete button next to a task to remove it.

## Logic Separation

This project uses a Data Pipeline and Orchestrator pattern to separate logic. The Data Pipeline handles the data flow and processing, while the Orchestrator manages the pipelines and dispatches events.

### Data Pipeline

```mermaid
classDiagram
    class DataPipeline {
        -Map~String, Command~ commands
        +command(commandName: String, params: Object)
    }
    
    class Command {
        -UseCase useCase
        +execute(params: Object)
    }
    
    class UseCase {
        <<interface>>
        -Processor processor
        -Transporter transporter
        -Inspector inspector
        +execute(params: Object)
    }
    
    %% DataHandler interfaces
    class Processor {
        <<interface>>
        -DataStorage datastorage
        +process(data: Object)
    }
    class Transporter {
        <<interface>>
        -DataStorage datastorage
        +transport()
    }
    class Inspector {
        <<interface>>
        -DataStorage datastorage
        +inspect()
    }
    
    class DataStorage {
        <<interface>>
        +getData()
        +setData(data: Object)
    }

    DataPipeline "1" --> "*" Command : manages
    Command --> "1" UseCase : wraps
    UseCase --> Processor : executes
    UseCase --> Transporter : executes
    UseCase --> Inspector : executes
    Processor --> DataStorage : uses
    Transporter --> DataStorage : uses
    Inspector --> DataStorage : uses
```

### Orchestrator

```mermaid
classDiagram
    class Orchestrator {
        -Map~String, DataPipeline~ pipelines
        -Dispatcher dispatcher
        +command(pipelineName: String, commandName: String, args: Object[]): Promise<Object>
    }

    class Dispatcher {
        -Map~String, DataPipeline~ pipelines
        -Map~String, List~ handlers
        +subscribe(eventName: String, handler: Function, priority: Number)
        +dispatch(eventName: String, data: Object)
    }

    class DataPipeline {
        -Map~String, UseCase~ useCases
        +command(commandName: String, args: Object[]): Promise<Object>
    }

    Orchestrator --> Dispatcher : Uses
    Orchestrator --> DataPipeline : Manages
    Dispatcher --> DataPipeline : Calls commands
```

### Orchestrator Data Flow

```mermaid
sequenceDiagram
participant User
participant Orchestrator
participant Dispatcher
participant PipelineA
participant PipelineB
User ->> Orchestrator: command("pipelineA", "updateLoad", args)
Orchestrator ->> PipelineA: command("updateLoad", args)
PipelineA -->> Orchestrator: resultA
Orchestrator ->> Dispatcher: dispatch("pipelineA:updateLoad", resultA)
Dispatcher ->> PipelineB: command("updateLoad", resultA)
PipelineB -->> Dispatcher: resultB
Dispatcher -->> Orchestrator: resultB (optional)
Orchestrator -->> User: return resultA
```

1. User executes the `updateLoad` command on `PipelineA` through the Orchestrator.
2. `PipelineA` executes the command and returns `resultA` to the Orchestrator.
3. The Orchestrator dispatches the event `pipelineA:updateLoad` with `resultA` to the Dispatcher.
4. The Dispatcher executes the `updateLoad` command on `PipelineB` with `resultA`.
5. `PipelineB` returns `resultB` to the Dispatcher, which optionally returns it to the Orchestrator.
6. The Orchestrator returns `resultA` to the User.

### DataPipeline Data Flow

```mermaid
sequenceDiagram
    participant User
    participant DataPipeline
    participant Command
    participant UseCase
    participant Processor
    participant Transporter
    participant DataStorage

    User->>DataPipeline: command('initialLoad', params)
    DataPipeline->>Command: execute(params)
    Command->>UseCase: execute(params)
    UseCase->>Processor: process(params)
    Processor->>DataStorage: setData(data)
    UseCase->>Transporter: transport()
    Transporter->>DataStorage: getData()
    Transporter-->>UseCase: return processed data
    UseCase-->>Command: return result
    Command-->>DataPipeline: return result
    DataPipeline-->>User: return result
```

1. User calls the `initialLoad` command on the DataPipeline.
2. DataPipeline executes the Command, which in turn executes the UseCase.
3. The UseCase processes the data using the Processor and stores it in DataStorage.
4. The UseCase then uses the Transporter to retrieve the processed data from DataStorage.
5. The Transporter returns the processed data to the UseCase.
6. The UseCase returns the result to the Command, which returns it to the DataPipeline.
7. The DataPipeline returns the result to the User.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.