import styled from 'styled-components';

export const Container = styled.div<{openMenu: boolean}>`
    width: ${({ openMenu }) => openMenu? '250px' : '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;

    background-color: bisque;
`;

export const MenuItem = styled.div<{ openMenu: boolean, isVisibleMenuItem?: string }>`
    width: 98%;
    min-height:  ${({ openMenu }) => openMenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content:  ${({ openMenu }) => openMenu? 'none' : 'center'};
    visibility: ${
                ({ openMenu }) => openMenu? 'visible' :
                ({ isVisibleMenuItem }) => isVisibleMenuItem? 'hidden' : 'visible' };

    span {
        font-weight:  ${({ openMenu }) => openMenu? '600' : '400px'};
        margin-left:  ${({ openMenu }) => openMenu? '20px' : 'none'};
        font-size:  ${({ openMenu }) => openMenu? '16px' : '12px'};
    }


    &:hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
`;

export const LinhaDivisoria = styled.hr<{ openMenu: boolean }>`
    border-color: #d2d2d2;
    box-sizing:border-box;
    width:100%; 
    display: ${({ openMenu }) => openMenu? 'inline' : 'none'};
`;