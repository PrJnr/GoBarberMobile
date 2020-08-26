/* eslint-disable react/prop-types */
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/background';
// import {Container} from './styles';

const Dashboard = () => {
    return <Background />;
};

export default Dashboard;

Dashboard.navigationOptions = {
    tabBarLabel: 'Agendamentos',
    tabBarIcon: ({tintColor}) => (
        <Icon name="event" size={20} color={tintColor} />
    ),
};
