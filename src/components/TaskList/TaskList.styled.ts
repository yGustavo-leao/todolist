import styled from "styled-components"

export const Container = styled.div`

    padding: .5rem;
    text-align: center;
    max-width: 1000px;
    margin: auto;

    h1 {
        margin: 2rem 0;
    }

    button {
        border: none;
        background: transparent;
    }

    li {
        list-style: none;
        font-weight: bold;
        border-bottom: 1px solid ${props => props.theme.colors.foreground};
        margin-bottom: .5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li > div {
        display: flex;
        column-gap: 1rem;
    }

    li button{
        &:nth-child(1) {
            color: #5A55FA;
        }

        &:nth-child(2) {
            color: #FA555A;
        }
    }
`

export const InputData = styled.div`

    padding-bottom: 2rem;

    .container {
        display: flex;
        justify-content: space-between;
        column-gap: 1rem;
    }

    input {
        flex-grow: 1;
        height: 3rem;
        border: none;
        border-radius: 5px;
        padding-left: .5rem;

        background: ${props => props.theme.colors.inputsBackground};
        color: white;
    }

    input:focus {
        outline: 1px solid ${props => props.theme.colors.foreground};
    }

    button:active {
        outline: 1px solid ${props => props.theme.colors.foreground};
    }

    button {
        height: 3rem;
        padding: 1rem;
        border-radius: 5px;
        border: none;

        background: ${props => props.theme.colors.inputsBackground};
        color: ${props => props.theme.colors.foreground};
    }
`