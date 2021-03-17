import { useContext } from 'react'
import { createContext , useState, useEffect, ReactNode} from 'react'
import { api } from '../services/api'


interface Itransaction {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;  
  createdAt: Date;
}

type TransactionCreate = Omit<Itransaction, 'id' | 'createdAt'>

// type TransactionCreate = Pick<Itransaction , 'title' | 'value' | 'type' | 'category'>

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Itransaction[],
  createTransactions: (transactions: TransactionCreate)=> void;
}

const TransactionContext = createContext<TransactionsContextData>( {} as TransactionsContextData)

export const TransactionsProvider = ({children}:TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Itransaction[]>([])

  const createTransactions = async (transaction: TransactionCreate) => {
    const transactionResponse = await api.post('/transactions', {
      ...transaction,
      createdAt: new Date()
    })
    
    setTransactions([...transactions, transactionResponse.data.transaction])
  }

  useEffect(()=>{
    api.get('transactions')
    .then((response)=> setTransactions(response.data.transactions))
  },[])

  return (
    <TransactionContext.Provider value={{transactions, createTransactions}}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => {
  const context = useContext(TransactionContext)

  return context
}