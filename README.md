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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.