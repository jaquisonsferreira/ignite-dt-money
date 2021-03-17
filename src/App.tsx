import { useState } from 'react'
import Modal from 'react-modal'
import Dashboard from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransaction';
import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root')

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }


  return (
    <TransactionsProvider>            
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal onRequestClose={handleCloseNewTransactionModal} isOpen={isNewTransactionModalOpen} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

