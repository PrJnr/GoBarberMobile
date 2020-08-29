import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/background';

// import { Container } from './styles';

const SelectProvider = () => {
    return <Background />;
};

export default SelectProvider;

SelectProvider.navigationOptions = ({navigation}) => ({
    title: 'Selecione um Prestador',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Dashboard');
            }}>
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    ),
});
// NavigationOption pode retornar um objeto, e pegar o parametro navigation para navegar
