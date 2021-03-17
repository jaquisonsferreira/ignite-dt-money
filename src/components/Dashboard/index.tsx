import React from 'react';
import Summary from '../Summary';
import {TransctionsTable} from '../TransctionsTable';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransctionsTable />
    </Container>
  )
}

export default Dashboard;