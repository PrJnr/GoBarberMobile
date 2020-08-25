import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from './store';

import Routes from './routes';

// import { Container } from './styles';

const src = () => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#7159c1"
                    />
                    <Routes />
                </PersistGate>
            </Provider>
        </NavigationContainer>
    );
};

export default src;
