import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        padding: 1rem;
        border: 0;
        border-radius: 6px;
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem 1.5rem;
        border-radius: 6px;
        background-color: transparent;
        border: 2px solid ${props => props.theme['green-300']};
        color: ${props => props.theme['green-300']};
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s, color 0.2s;

        &:hover {
            background-color: ${props => props.theme['green-300']};;
            border: 2px solid ${props => props.theme['green-300']};
            color: ${props => props.theme['white']};
        }
    }
`