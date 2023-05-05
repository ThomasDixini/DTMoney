import { createContext, useEffect, useState, ReactNode } from "react";
import { Transaction } from "../pages/Transactions/Transactions";

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
        const url = new URL('http://localhost:3333/transactions')

        if(query){
            url.searchParams.append('q', query)
        }

        const response = await fetch(url)
        const data = await response.json();

        setTransactions(data)
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