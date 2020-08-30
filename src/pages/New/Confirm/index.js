/* eslint-disable react/prop-types */
import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';

import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/background';

import {Container, Avatar, Name, Time, SubmitButton} from './styles';

const Confirm = ({navigation}) => {
    const provider = navigation.getParam('provider');
    const time = navigation.getParam('time');

    async function handleAddAppointment() {
        await api.post('appointments', {
            provider_id: provider.id,
            date: time,
        });

        navigation.navigate('Dashboard');
    }

    const timeFormatted = useMemo(() => {
        formatRelative(parseISO(time), new Date(), {locale: pt});
    }, [time]);

    return (
        <Background>
            <Container>
                <Avatar
                    source={{
                        uri: provider.avatar
                            ? provider.avatar.url
                            : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                    }}
                />
                <Name>{provider.name}</Name>
                <Time>{timeFormatted}</Time>

                <SubmitButton onPress={handleAddAppointment}>
                    Confirmar Agendamento
                </SubmitButton>
            </Container>
        </Background>
    );
};

export default Confirm;

Confirm.navigationOptions = (navigation) => ({
    title: 'Confirmar Agendamento',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack(); // Volta uma tela dentro da pilha do Stack Navigator
            }}>
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    ),
});
