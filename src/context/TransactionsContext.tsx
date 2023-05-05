import { createContext, useEffect, useState, ReactNode } from "react";
import { Transaction } from "../pages/Transactions/Transactions";
import { api } from "../lib/axios";

interface TransactionsContextData {
    transacions: Transaction[];
    loadTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
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

    useEffect(() => {
        loadTransactions();
    }, [])

    return(
        <TransactionsContext.Provider value={{ 
            transacions ,
            loadTransactions
            }}>
            {children}
        </TransactionsContext.Provider>
    )
}