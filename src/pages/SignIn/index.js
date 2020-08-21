import React from 'react';
import { View } from 'react-native';

import Input from '~/components/Input'
import Button from '~/components/Button'
import Background from '~/components/background'

// import { Container } from './styles';

const SignIn = () => {
  return (
      <Background>
          <View />

          <Input icon="call" style={{marginTop: 30}} placeholder="Digite seu nome"/>
          <Button> ACESSAR </Button>
        </Background>
  );
}

export default SignIn;
