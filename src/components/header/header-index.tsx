import { useContext } from 'react';
import { OpenMenuContext } from '../../contexts/openMenuContext';

import { 
    ButtonContainer, 
    ButtonIcon, 
    ButtonLogin, 
    Container, 
    ContainerLogin, 
    HeaderButton, 
    LoginButtonIcon, 
    LogoContainer, 
    SearchButton, 
    SearchContainer, 
    SearchInput, 
    SearchInputContainer, 
    Span
} from "./header-style";

import HamburguerIcon from '../../assets/icons/icone_hamburger.png';
import Logo from '../../assets/logo/logo_youTube.png';
import SearchIcon from '../../assets/icons/icons8-pesquisar-250.png';
import MicrofoneIcon from '../../assets/icons/microfone-gravador.png';
import VideoIcon from '../../assets/icons/icone_video.png';
import NotificacaoIcon from '../../assets/icons/icons8-sino-100.png';
import LoginIconPng from '../../assets/icons/login-icon.png';

import { useNavigate } from 'react-router-dom';

 
function Header(){
    const { openMenu, setOpenMenu } = useContext(OpenMenuContext);
    const navigate = useNavigate()

    return (

        <Container>
            {/* ===== 1º BLOCO - Menu Hmburguer + Logo ======================*/}
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={ HamburguerIcon } />
                </ButtonContainer>
                <img 
                    style={{ cursor: 'pointer', width: '100px'}}
                    alt="Logo"
                    src={Logo}
                />
            </LogoContainer>


            {/* ===== 2º BLOCO - SEARCH + BOTÃO MICROFONE ====================*/}
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar"/>
                  
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={ SearchIcon }/>
                </SearchButton>

                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={ MicrofoneIcon }/>
                    </ButtonContainer>
            </SearchContainer>

            {/* ===== 3º BLOCO - BOTÕES Video + Notificação + Iniciais ===========*/}

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={ VideoIcon }/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={ NotificacaoIcon }/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    RM
                </ButtonContainer>

            </HeaderButton>

            <ContainerLogin onClick={ () => navigate('/login')}>
                <ButtonLogin>
                    <LoginButtonIcon alt="" src={ LoginIconPng } />
                    <Span>Fazer login</Span>
                </ButtonLogin>
            </ContainerLogin>

        
        </Container>
    )
}

export default Header;


   

    

    