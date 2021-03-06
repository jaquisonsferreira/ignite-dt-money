import { FormEvent, useState } from 'react';
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransaction } from '../../hooks/useTransaction';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: ()=>void;
}

export const NewTransactionModal = ({isOpen, onRequestClose}: INewTransactionModalProps) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit')
  const { createTransactions } = useTransaction()

  const handleCreateNewTransaction = (e: FormEvent) => {
    e.preventDefault()
 
    createTransactions({title, value, category, type})

    setTitle('')
    setValue(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >

    <Container onSubmit={handleCreateNewTransaction}>
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal"/>
      </button>

        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        
        <input 
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
          type="button" 
          onClick={()=> setType('deposit')}
          isActive={type==='deposit'}
          activeColor="green"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          
          <RadioBox 
          type="button" 
          onClick={()=> setType('withdraw')}
          isActive={type==='withdraw'}    
          activeColor="red"      
          >
            <img src={outcomeImg} alt="Saida"/>
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input           
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

    </Container>    

  </Modal>
  )
}
