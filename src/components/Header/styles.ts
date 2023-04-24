import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        height: 50px;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        border: 0;
        background-color: ${props => props.theme['green-500']};
        color: white;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background-color: ${props => props.theme['green-700']};
            transition: 0.2s;
        }
    }
`