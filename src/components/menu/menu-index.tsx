import { useContext,  } from 'react';
import { OpenMenuContext } from '../../contexts/openMenuContext';

import { 
    Container, 
    MenuItem 
} from "./menu-style";

const items = [0,0,0,0,0];


function Menu(){
    const { openMenu } = useContext(OpenMenuContext);

    return (
        <Container openMenu={openMenu}>
           
            <MenuItem>
                Início
            </MenuItem>
            
        </Container>
    )
}

export default Menu;