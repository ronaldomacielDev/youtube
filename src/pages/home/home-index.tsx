import VideoComponent from "../../components/videoComponent/videoComponent-index";
import { Container } from "./home-styles";
import { OpenMenuContext } from "../../contexts/openMenuContext";
import { useContext } from 'react';
import MenuSuperioHome from "../../components/menuSuperiorHome/menuSuperiorHome-index";


function Home(){
    const { openMenu } = useContext(OpenMenuContext);

    return (
        <div>
            <MenuSuperioHome/>
            <Container openMenu={openMenu}>
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
            </Container>
    </div>
    )
}
export default Home;