import logoImg from '../../assets/logoImg.svg'

import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="to do" />
      </Content>
    </Container>
  )
}