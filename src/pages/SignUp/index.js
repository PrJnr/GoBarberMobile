import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png'


import Background from '~/components/background'

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SignUp({navigation}) {
  return (
      <Background>
          <Container>
                <Image source={logo} />
                <Form>
                        <FormInput icon="person-outline"

                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome Completo"
                        />
                        <FormInput icon="mail-outline"
                        keyboard="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        />
                        <FormInput icon="lock-outline"
                        secureTextEntry

                        placeholder="Digite sua senha secreta"
                        />

                        <SubmitButton onPress={()=> {}}>
                            Cadastre-se
                        </SubmitButton>
                </Form>
                <SignLink onPress={()=> {navigation.navigate('SignIn')}} >
                    <SignLinkText>Acessar minha conta</SignLinkText>
                </SignLink>

          </Container>

        </Background>
  );
}


