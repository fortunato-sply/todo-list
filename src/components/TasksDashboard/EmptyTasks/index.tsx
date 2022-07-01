import clipboardImg from '../../../assets/clipboardImg.png'
import { Container, Content } from './styles'



export function EmptyTasks() {
  return (
    <Container>
      <Content>
        <img src={clipboardImg} alt="empty tasks" />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </Content>
    </Container>
  )
}