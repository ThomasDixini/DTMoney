import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary/index";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
    id: number,
    description: string,
    category: string,
    price: number,
    type: 'income' | 'outcome',
    createdAt: string,
}

export function Transactions() {

    const [transacions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions() {
        const response = await fetch(`http://localhost:3333/transactions`)
        const data = await response.json();

        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions();
    }, [])

    return (
        <>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                        <tbody>
                            {
                                transacions.map(transaction => {
                                    return(
                                        <tr key={transaction.id}>
                                            <td width="50%"> {transaction.description} </td>
                                            <td> 
                                                <PriceHighlight variant={transaction.type}>
                                                    {transaction.price} 
                                                </PriceHighlight>
                                            </td>
                                            <td> {transaction.category} </td>
                                            <td> {transaction.createdAt} </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    );
}