import { useContextSelector } from 'use-context-selector'
import { Header } from "../../components/Header/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary/index";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../context/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { memo } from 'react';

export interface Transaction {
    id: number,
    description: string,
    category: string,
    price: number,
    type: 'income' | 'outcome',
    createdAt: string,
}

function TransactionsPage() {

    const transacions = useContextSelector(TransactionsContext, context => {
        return context.transacions
    })

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
                                                    {transaction.type == 'outcome' && '- '}
                                                    {priceFormatter.format(transaction.price)} 
                                                </PriceHighlight>
                                            </td>
                                            <td> {transaction.category} </td>
                                            <td> {dateFormatter.format(new Date(transaction.createdAt))} </td>
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

export const Transactions = memo(TransactionsPage)