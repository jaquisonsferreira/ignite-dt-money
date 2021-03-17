import React from 'react';
import { Container } from './styles';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransaction } from '../../hooks/useTransaction';

const Summary: React.FC = () => {
  const { transactions } = useTransaction()

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.value
      acc.total += transaction.value
    }else {
      acc.withdraw += transaction.value
      acc.total -= transaction.value
    }
    return acc
  }, {
    deposits: 0,
    withdraw: 0,
    total:0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas"/>
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {currency: 'BRL', style: 'currency'}).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="saidas"/>
        </header>
        <strong> -{new Intl.NumberFormat('pt-BR', {currency: 'BRL', style: 'currency'}).format(summary.withdraw)}</strong>
      </div>
      <div className="highligh-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total"/>
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {currency: 'BRL', style: 'currency'}).format(summary.total)}</strong>
      </div>
    </Container>
  )
}

export default Summary;