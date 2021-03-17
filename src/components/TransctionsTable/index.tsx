import React from 'react';
import { useTransaction } from '../../hooks/useTransaction';
import { Container } from './styles';

export const TransctionsTable: React.FC = () => {
  const { transactions } = useTransaction()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((trans)=>(
          <tr key={trans.id}>
            <td>{trans.title}</td>
            <td className={trans.type}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(trans.value)}
            </td>
            <td>{trans.category}</td>
            <td> {new Intl.DateTimeFormat('pt-BR').format(new Date(trans.createdAt))}</td>
          </tr>
          ))}        
        </tbody>
      </table>
    </Container>
  )
}
