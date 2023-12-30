import { 
    ChannelImage,
    Container, 
    ImageBanner, 
    TextCard, 
    TextContainer,
    Title,
    TitleContainer
} from "./videoComponent-styles";

function VideoComponent(){
    return (
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/2ZLrFCXW1lQ/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDmTuJt0PsTFOHHHWzHPNMxQf4AJg"/>
            <TitleContainer>
                <ChannelImage>
                    RM
                </ChannelImage>
                <TextContainer>
                    <Title>Eyshila - Digno | Live Session (Ao Vivo)</Title>
                    <TextCard>Central Gospel Music </TextCard>    
                    <TextCard>1.399.084 visualizações  5 de nov. de 2016  </TextCard>   
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}
export default VideoComponent;