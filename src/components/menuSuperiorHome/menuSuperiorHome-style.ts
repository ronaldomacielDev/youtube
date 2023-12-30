import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 8px;

`;

export const MenuItem = styled.div`
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 5px 8px;
    margin: 5px;
    cursor: pointer;
    background-color: #d1d1d1;

    span {
        font-weight: '600';
        margin-left: '10px';
        font-size: '16px';
    }
    
    &:hover {
        background-color: #BEBEBE;
    }

`;
