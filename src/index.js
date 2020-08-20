import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import Routes from './routes'


// import { Container } from './styles';

const src = () => {
  return (
      <NavigationContainer>
          <Routes/>
      </NavigationContainer>
  )

}

export default src;
