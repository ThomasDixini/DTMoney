import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary/index";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../context/TransactionsContext";

export interface Transaction {
    id: number,
    description: string,
    category: string,
    price: number,
    type: 'income' | 'outcome',
    createdAt: string,
}

export function Transactions() {

    const { transacions } = useContext(TransactionsContext)

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