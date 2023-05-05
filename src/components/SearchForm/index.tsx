import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormIputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { loadTransactions } = useContext(TransactionsContext)
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