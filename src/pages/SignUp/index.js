import React, {useRef} from 'react';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/background';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

export default function SignUp({navigation}) {
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit() {}
    return (
        <Background>
            <Container>
                <Image source={logo} />
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome Completo"
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current.focus()}
                    />
                    <FormInput
                        icon="mail-outline"
                        keyboard="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha secreta"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />

                    <SubmitButton onPress={handleSubmit}>
                        Cadastre-se
                    </SubmitButton>
                </Form>
                <SignLink
                    onPress={() => {
                        navigation.navigate('SignIn');
                    }}>
                    <SignLinkText>Já tenho conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
