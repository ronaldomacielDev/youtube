import styled from 'styled-components';


/* ===== 1º BLOCO - Menu Hamburguer + Logo =========================================*/ 
export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;

    background-color: yellow;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin}) => margin? margin : 0 };
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #d2d2d2;
    }


`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

/* ===== 2º BLOCO - SEARCH + BOTÃO MICROFONE ======================================*/

export const SearchContainer = styled.div`
    background-color: #fff;
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

/* ===== 3º BLOCO - BOTÕES Video + Notificação + Iniciais ========================*/

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
    background-color: #fff;

    background-color: beige;
`;