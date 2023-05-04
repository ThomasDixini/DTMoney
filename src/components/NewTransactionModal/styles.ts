import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    height: 100vh;
    width: 100vw;
    inset: 0;

    background-color: rgba(0, 0, 0, 0.5);
`

export const Content = styled(Dialog.Content)`
    background-color: ${props => props.theme["gray-800"]};
    border-radius: 6px;

    padding: 2.5rem 3rem;
    min-width: 32rem;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 50%);

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;

        input {
            padding: 1rem;
            border-radius: 6px;
            border: 0;
            background-color: ${props => props.theme["gray-900"]};
            color: white;
            &::placeholder {
                color: ${props => props.theme["gray-500"]};
            }
        }

        button[type="submit"]{
            background-color: ${props => props.theme["green-500"]};
            color: white;
            padding: 1rem;
            border-radius: 6px;
            border: 0;

            &:disabled {
                cursor: not-allowed;
                opacity: 0.4;
            }

            &:not(:disabled):hover {
                filter: brightness(0.8);
                transition: background-color 0.2s;
                cursor: pointer
            }
        }
    }
`

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    padding: 1rem 1.5rem;
    border-radius: 6px;
    border: 0;
    background-color: ${props => props.theme["gray-600"]};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;

    svg {
        color: ${props => props.variant == 'income' ? props.theme["green-300"] : props.theme["red-300"]}
    }

    &[data-state='checked']{
        background-color: ${props => props.variant == 'income' ? props.theme["green-500"] : props.theme["red-500"]};
        color: white;

        svg {
            color: white;
        }
    }
    &[data-state='unchecked']:hover{
        background-color: ${props => props.theme["gray-700"]};
        transition: background-color 0.2s;
    }
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background-color: transparent;
    border: 0;
    padding: 0.5rem;
    color: ${props => props.theme["gray-300"]};
    cursor: pointer;
    line-height: 0;
`