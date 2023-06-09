import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../context/TransactionsContext';
import { useMemo } from 'react';

export function useSummary() {
    const transacions = useContextSelector(TransactionsContext, context => {
        return context.transacions
    })

    const summary = useMemo(() => {
        return transacions.reduce((acc, transaction) => {
            if(transaction.type == 'income'){
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else if(transaction.type == 'outcome'){
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }
    
            return acc
        },{
            income: 0,
            outcome: 0,
            total: 0
        })
    }, [transacions])

    return summary;
}