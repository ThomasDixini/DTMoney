import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';


export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            
            <Content >
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X />
                </CloseButton>
                    <form action="">
                        <input type="text" placeholder='Descrição' required/>
                        <input type="text" placeholder='Preço' required/>
                        <input type="text" placeholder='Categoria' required/>
                        <TransactionType>
                            <TransactionTypeButton>
                                <ArrowCircleUp size={24}/>
                                Entrada
                            </TransactionTypeButton>
                            <TransactionTypeButton>
                                <ArrowCircleDown size={24}/>
                                Saída
                            </TransactionTypeButton>
                        </TransactionType>

                        <button type="submit">
                            Cadastrar
                        </button>
                    </form>
                
            </Content>
        </Dialog.Portal>
    );
}