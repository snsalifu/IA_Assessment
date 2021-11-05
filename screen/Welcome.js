import React from 'react';
import { StatusBar } from "expo-status-bar";


import{
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer, 
    WelcomeImage,
    Avatar

    
} from './../components/styles';


const Welcome = ({navigation}) => {

    return (
        <>
            <StatusBar style='light' />
            <InnerContainer>
                    <WelcomeImage resizeMode="cover" source={require('./../assets/img5.png')}/>
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome Friend!</PageTitle>
                    <SubTitle welcome={true}>Salifu Shaban</SubTitle>
                    <SubTitle welcome={true}>Salifushahaban@icloud.com</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/Logo.jpg')}/>
                        <Line />
                        <StyledButton onPress ={() =>navigation.navigate("Home")}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                      
                    </StyledFormArea>
                
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}

export default Welcome;


