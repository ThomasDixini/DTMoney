import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod'

const createTransitionSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income','outcome'])
})

type createTransactionType = z.infer<typeof createTransitionSchema>

export function NewTransactionModal() {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<createTransactionType>()

    async function handleCreateNewTransaction(){
        await new Promise(resolve => setTimeout(resolve, 2000))
    }

    return (
        <Dialog.Portal>
            <Overlay />
            
            <Content >
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X />
                </CloseButton>
                    <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input 
                            type="text" 
                            placeholder='Descrição' 
                            required
                            {...register('description')}
                        />
                        <input 
                            type="text" 
                            placeholder='Preço' 
                            required
                            {...register('price', { valueAsNumber: true })}
                        />
                        <input 
                            type="text" 
                            placeholder='Categoria' 
                            required
                            {...register('category')}
                        />
                        <TransactionType>
                            <TransactionTypeButton variant='income' value='income'>
                                <ArrowCircleUp size={24}/>
                                Entrada
                            </TransactionTypeButton>
                            <TransactionTypeButton variant='outcome' value='outcome'>
                                <ArrowCircleDown size={24}/>
                                Saída
                            </TransactionTypeButton>
                        </TransactionType>

                        <button type="submit" disabled={isSubmitting}>
                            Cadastrar
                        </button>
                    </form>
                
            </Content>
        </Dialog.Portal>
    );
}