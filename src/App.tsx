import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Transactions } from "./pages/Transactions/Transactions";
import { TransactionsProvider } from "./context/TransactionsContext";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
       <TransactionsProvider>
        <Transactions />
       </TransactionsProvider>
       <GlobalStyle />
    </ThemeProvider>
  )
}


