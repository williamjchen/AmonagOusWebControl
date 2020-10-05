import styled from 'styled-components'

export default styled.input`
    text-transform: uppercase;
    font-family: 'Raleway';
    font-size: 48px;
    height: 80px;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    border: 2px solid #B3B3B3;
    text-align: center;
    caret-color: grey;
    user-select: initial;

    &::placeholder {
        color: #ccd753;
        opacity: 50%;
    }

    &:focus::placeholder {
        color: transparent;
    }
`