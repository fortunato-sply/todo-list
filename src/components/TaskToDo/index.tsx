import { Container } from './styles'
import { Task } from '../../App'
import { TrashSimple } from 'phosphor-react'
import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

interface TaskProps {
  task: Task;
  onDeleteTask: (task: Task) => void;
  onChangeTaskStatus: (task: Task) => void;
}

export function TaskToDo({task, onDeleteTask, onChangeTaskStatus}: TaskProps) {
  function handleSetChecked() {
    onChangeTaskStatus(task)
  }

  function handleDeleteTask() {
    onDeleteTask(task)
  }

  return (
    <Container>
      <div>
        <input 
          id={task.id}
          type="checkbox" 
          defaultChecked={task.isComplete} 
          onClick={handleSetChecked}
        />
        <label htmlFor={task.id}>{task.title}</label>
      </div>
      
      <button onClick={handleDeleteTask}>
        <TrashSimple size={24}/>
      </button>
    </Container>
  )
}