import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: #fff;
`;

export const LoginContainer = styled.div`
    width: 480px;
    height: 530px;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 65px;
    box-sizing: border-box;




    @media(max-width: 834px){
        width: 550px;
        height: 530px;
        padding: 60px 10px;
    }
    @media(max-width: 414px){
        width: 350px;
        height: 530px;
        padding: 60px 10px;
    }
    
`;

export const LogoGogle = styled.img`
    width: 70px;
    height: 25px;
`;

export const Title = styled.h2`
    color: #000;
    font-weight: 400;
    margin: 10px 0;
`;

export const SubTitle = styled.h4`
    color: #000;
    font-weight: 400;
    font-size: 1.1rem;
    margin: 0 0 30px 0;
`;

export const InputEmail = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    font-size: 17px;
    padding: 0 10px;
    box-sizing: border-box;

    &focus {
        border-color: #1a75ff;
        border-width: 2px;
        outline: none;
    }

`;

export const InputPassword = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    font-size: 17px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 10px;

    &focus {
        border-color: #1a75ff;
        border-width: 2px;
        outline: none;
    }
`;

export const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 5px;
    margin-top: 6px;
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    box-sizing: border-box;
    margin-top: 30px;
`;

export const SignUp = styled.span`
    color: #1a75ff;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: #005cd6;
    }
`;

export const ButtonLogin = styled.button`
    width: 100px;
    height: 100%;
    border: none;
    background-color: #1a75ff;
    border-radius: 6px;
    color: #fff;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    transition: .5s;

    &:hover {
        color: #000;
        background-color: #d3d3d3;
    }

`;