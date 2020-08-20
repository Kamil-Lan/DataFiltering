import styled, { css } from 'styled-components';

export const Group = styled.div`
    display: inline-block;
    width: 20%;
    justify-content: space-between;
    margin: 45px 0;
`;

const addStyle = css`
    &:focus {
        outline: none;
    }
`;

export const FormInputC = styled.input`
    background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: inline-block;
    border: 1px solid grey;
    border-radius: 3px;
    margin: 25px 0;

    ${addStyle}

`;