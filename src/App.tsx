import { X } from 'phosphor-react';
import { useState } from 'react'
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TasksDashboard } from './components/TasksDashboard';

import { GlobalStyle } from "./styles/global";

export interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const isTaskListEmpty = tasks.length === 0;

  function createNewTask(newTask: Task) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskToDelete: Task) {
    const updatedTasks = tasks.filter(task => {
      return task.id !== taskToDelete.id;
    })

    setTasks(updatedTasks);
  }

  function changeTaskStatus(taskToChange: Task) {
    const updatedTasks = tasks.map(task => 
      task.id === taskToChange.id 
      ? {
        ...task,
        isComplete: !task.isComplete,
      } : task
    )

    setTasks(updatedTasks);
  }

  return (
    <div>
      <Header />
      <NewTask onCreateNewTask={createNewTask}/>
      <TasksDashboard 
        tasks={tasks} 
        onDeleteTask={deleteTask}
        isTaskListEmpty={isTaskListEmpty}
        onChangeTaskStatus={changeTaskStatus}
      />
      <GlobalStyle />
    </div>
  )
}
