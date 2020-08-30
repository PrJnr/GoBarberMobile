/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/background';

import api from '~/services/api';

import {Container, ProvidersList, Provider, Avatar, Name} from './styles';

const SelectProvider = ({navigation}) => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        async function loadProviders() {
            const response = await api.get('providers');
            setProviders(response.data);
        }
        loadProviders();
    }, []);
    return (
        <Background>
            <Container>
                <ProvidersList
                    data={providers}
                    keyExtractor={(provider) => String(provider.id)}
                    renderItem={(
                        {item}, // Item contem todos os dados de Provider
                    ) => (
                        <Provider
                            onPress={() =>
                                navigation.navigate('SelectDateTime', {
                                    item,
                                })
                            }>
                            <Avatar
                                source={{
                                    uri: item.provider.avatar
                                        ? item.provider.avatar.url
                                        : `https://api.adorable.io/avatar/50/${item.name}.png`,
                                }}
                            />
                            <Name>{item.name}</Name>
                        </Provider>
                    )}
                />
            </Container>
        </Background>
    );
};

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

export default SelectProvider;
