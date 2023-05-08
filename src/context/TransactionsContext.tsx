import { createContext, useEffect, useState, ReactNode } from "react";
import { Transaction } from "../pages/Transactions/Transactions";
import { api } from "../lib/axios";

interface TransactionsContextData {
    transacions: Transaction[];
    loadTransactions: (query?: string) => Promise<void>;
    createTransactions: (data: CreateTransactionsType) => void
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface CreateTransactionsType {
    description: string,
    category: string,
    price: number,
    type: 'income' | 'outcome',
    createdAt: Date
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transacions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions(query?: string) {
        const response = await api.get('transactions', {
            params: {
                q: query
            }
        })
        setTransactions(response.data)
    }

    async function createTransactions(data: CreateTransactionsType) {
        const { description, category, price, type } = data

        const response = await api.post('transactions', {
            description,
            category,
            price,
            type,
            createdAt: new Date()
        })

        setTransactions(state => [response.data, ...state])
    }

    useEffect(() => {
        loadTransactions();
    }, [])

    return(
        <TransactionsContext.Provider value={{ 
            transacions ,
            loadTransactions,
            createTransactions
            }}>
            {children}
        </TransactionsContext.Provider>
    )
}