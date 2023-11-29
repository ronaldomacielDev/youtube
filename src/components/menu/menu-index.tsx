import { useContext,  } from 'react';
import { OpenMenuContext } from '../../contexts/openMenuContext';

import { 
    ButtonIcon,
    Container, 
    LinhaDivisoria, 
    MenuItem 
} from "./menu-style";

import HomeIcon from '../../assets/icons/icon-home.png';
import ShortsIcon from '../../assets/icons/icon-youtube-shorts.png';
import { useNavigate } from 'react-router-dom';

const items = [0,0,0,0,0];


function Menu(){
    const { openMenu } = useContext(OpenMenuContext);
    const navigate = useNavigate()
 
    return (
        <Container openMenu={openMenu}>
            
            <MenuItem openMenu={openMenu} onClick={() => navigate('/')}>
                <ButtonIcon alt="" src={ HomeIcon } />
                <span>Início </span>
            </MenuItem>

            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={ ShortsIcon } />
                <span>Shorts </span>
            </MenuItem>

            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={ HomeIcon } />
                <span>Início </span>
            </MenuItem>

            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={ HomeIcon } />
                <span>Início </span>
            </MenuItem>
            
            <LinhaDivisoria openMenu={openMenu}/>

            <MenuItem openMenu={openMenu} onClick={() => navigate('/library')} >
                <ButtonIcon alt="" src={ HomeIcon } />
                <span>Biblioteca</span>
            </MenuItem>

            <MenuItem openMenu={openMenu} isVisibleMenuItem={'histórico'} onClick={() => navigate('/history')} >
                <ButtonIcon alt="" src={ HomeIcon } />
                <span>Histórico</span>
            </MenuItem>
            
        </Container>
    )
}

export default Menu;