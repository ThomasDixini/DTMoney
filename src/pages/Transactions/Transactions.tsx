import { Header } from "../../components/Header/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary/index";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                        <tbody>
                            <tr>
                                <td width="50%"> Desenvolvimento de site </td>
                                <td> 
                                    <PriceHighlight variant="income">
                                        R$ 12.000,00 
                                    </PriceHighlight>
                                </td>
                                <td> Venda </td>
                                <td> 10/04/23 </td>
                            </tr>
                            <tr>
                                <td width="50%"> Desenvolvimento de site </td>
                                <td>
                                    <PriceHighlight variant="outcome">
                                        -R$ 12.000,00 
                                    </PriceHighlight>
                                </td>
                                <td> Venda </td>
                                <td> 10/04/23 </td>
                            </tr>
                        </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    );
}