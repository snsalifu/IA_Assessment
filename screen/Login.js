import React from 'react';
import { StatusBar } from "expo-status-bar";

import { Formik } from 'formik';
import {Octicons} from '@expo/vector-icons';

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon, 
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
} from './../components/styles';
import { View } from 'react-native';

const{brand, darkLight} = Colors;

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/Logo.jpg')}/>
                <PageTitle>MyBike shop</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '', password:''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values})=> (
                        <StyledFormArea>
                          <MyTextInput
                            label='Email Address'
                            icon ='mail'
                            placeholder='snsalifu@gmail.com'
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType={"email-address"}
                          />
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput =(label,icon, ...props) =>{
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}  />
            </LeftIcon>
            <StyledInputLabel {...props} />
        </View>
    )
}

export default Login;


