import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod'
import { useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';

const createTransitionSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income','outcome'])
})

type createTransactionType = z.infer<typeof createTransitionSchema>

export function NewTransactionModal() {
    const { createTransactions } = useContext(TransactionsContext) 
    const { control, register, handleSubmit, formState: { isSubmitting }  } = useForm<createTransactionType>({
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: createTransactionType){
        const { description, category, price, type } = data

        await createTransactions({
            description, 
            category, 
            price,
            type,
            createdAt: new Date()
        })
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
                        <Controller 
                            control={control}
                            name='type'
                            render={({ field }) => {
                                return (
                                    <TransactionType onValueChange={ field.onChange } value={ field.value }>
                                        <TransactionTypeButton variant='income' value='income'>
                                            <ArrowCircleUp size={24}/>
                                            Entrada
                                        </TransactionTypeButton>
                                        <TransactionTypeButton variant='outcome' value='outcome'>
                                            <ArrowCircleDown size={24}/>
                                            Saída
                                        </TransactionTypeButton>
                                    </TransactionType>
                                );
                            }}
                        />

                        <button type="submit" disabled={isSubmitting}>
                            Cadastrar
                        </button>
                    </form>
                
            </Content>
        </Dialog.Portal>
    );
}