import {MainContainer, 
        LoginContainer, 
        LogoGogle, 
        Title, 
        SubTitle, 
        InputEmail, 
        InputPassword, 
        CheckBoxContainer, 
        ButtonsContainer, 
        SignUp, 
        ButtonLogin 
} from "./login-style";

import logoGooglePng from '../../assets/logo/google-logo.png'


function Login(){
    return (
        <MainContainer>
            <LoginContainer>
                <LogoGogle alt="logotipo google" src={logoGooglePng} />
                <Title>Fazer login</Title>
                <SubTitle>Prosseguir no YouTube</SubTitle>
                <InputEmail
                    type='email'
                    placeholder="E-mail"


                />

                <InputPassword
                    type="password"
                    placeholder="Senha"
                />

                <CheckBoxContainer>
                    <input type="checkbox" id="show-password" />
                    <label htmlFor="show-password">Mostrar senha</label>
                </CheckBoxContainer>

                <ButtonsContainer>
                    <SignUp>
                        Criar Conta
                    </SignUp>

                    <ButtonLogin>
                        Próxima
                    </ButtonLogin>

                </ButtonsContainer>

            </LoginContainer>
        </MainContainer>
    )
}
export default Login;




