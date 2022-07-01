import { PlusCircle } from 'phosphor-react'

import { Container, Content } from './styles'

import { Task } from '../../App';
import { v4 as uuidv4 } from 'uuid';
import { InvalidEvent, useState } from 'react';

interface NewTaskProps {
  onCreateNewTask: (newTask: Task) => void;
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [title, setTitle] = useState('')

  const isNewTaskEmpty = title === '';

  function handleCreateNewTask() {
    event?.preventDefault()

    const newTask = {
      id: uuidv4(),
      title: title,
      isComplete: false
    }

    onCreateNewTask(newTask)
    setTitle('')
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleCreateNewTask}>
          <textarea
            placeholder="Adicione uma nova tarefa"
            value={title}
            onChange={event => setTitle(event.target.value)}
            onInvalid={handleNewTaskInvalid}
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            Add 
            <PlusCircle 
              size={16} 
              weight="bold"
            />
          </button>
        </form>
      </Content>
    </Container>
  )
}