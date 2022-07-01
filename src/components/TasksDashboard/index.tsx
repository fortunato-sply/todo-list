import { 
  CompletedTasks, 
  Container, 
  Counter, 
  CreatedTasks, 
  Header,
  Content
} from "./styles";

import { Task } from "../../App"
import { EmptyTasks } from "./EmptyTasks";
import { TaskToDo } from "../TaskToDo";

interface TasksDashboardProps {
  tasks: Task[];
  onDeleteTask: (taskToDelete: Task) => void;
  isTaskListEmpty: boolean;
  onChangeTaskStatus: (taskToChange: Task) => void;
}

export function TasksDashboard({tasks, onDeleteTask, onChangeTaskStatus, isTaskListEmpty}: TasksDashboardProps) {
  const completedTasks = tasks.reduce((acc, task) => (task.isComplete ? acc + 1 : acc), 0)
  const createdTasks = tasks.length

  return (
    <Container>
      <Header>
        <CreatedTasks>
          Tarefas criadas <Counter>{createdTasks}</Counter>
        </CreatedTasks>
        <CompletedTasks>
          Concluídas <Counter>{completedTasks} de {createdTasks}</Counter>
        </CompletedTasks>
      </Header>

      <Content>
        {
          isTaskListEmpty ? <EmptyTasks /> : (
            <>
              {tasks.map(task => {
                return (
                  <TaskToDo
                    key={task.id} 
                    task={task} 
                    onDeleteTask={onDeleteTask}
                    onChangeTaskStatus={onChangeTaskStatus}
                  />
                )
                })}
            </>
          )
        } 
      </Content>
      
    </Container>
  )
}