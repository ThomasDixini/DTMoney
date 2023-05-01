import { createContext, useEffect, useState, ReactNode } from "react";
import { Transaction } from "../pages/Transactions/Transactions";

interface TransactionsContextData {
    transacions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transacions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions() {
        const response = await fetch(`http://localhost:3333/transactions`)
        const data = await response.json();

        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions();
    }, [])

    return(
        <TransactionsContext.Provider value={{ transacions }}>
            {children}
        </TransactionsContext.Provider>
    )
}