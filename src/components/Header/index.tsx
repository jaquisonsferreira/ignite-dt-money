import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface IPropsHeader {
  onOpenNewTransactionModal: ()=> void;
}

export const Header = ({ onOpenNewTransactionModal }: IPropsHeader) => {
  return (
    <Container>
      <Content>      
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>      
      </Content>
    </Container>
  )
}
