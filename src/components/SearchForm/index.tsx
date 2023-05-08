import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../context/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormIputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const loadTransactions = useContextSelector(TransactionsContext, context => {
        return context.loadTransactions
    })
    const { register, handleSubmit } = useForm<SearchFormIputs>({
        resolver: zodResolver(searchFormSchema)
    });

    function handleSearchTransactions(data: SearchFormIputs) {
        loadTransactions(data.query)
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações" 
                {...register('query')}
            />

            <button type="submit">
                <MagnifyingGlass size={24}/>
                Buscar
            </button>
        </SearchFormContainer>
    );
}