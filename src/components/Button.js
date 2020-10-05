import styled from 'styled-components'

export default styled.button`
    text-transform: uppercase;
    border: 0.25em #ccd753 solid;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    line-height: 0.75em;
    color: black;
    background-color: #ccd753;
    border-radius: 1.5em;
    padding: 0.5em 0.5em;

    &:hover {
        filter: brightness(100%);
        background-color: white;
    }

    &:focus, button:active {
        outline: none;
    }

    &:active {
        filter: brightness(50%);
    }
`

