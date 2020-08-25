import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

// import { Container } from './styles';

const src = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <Routes />
        </NavigationContainer>
    );
};

export default src;
