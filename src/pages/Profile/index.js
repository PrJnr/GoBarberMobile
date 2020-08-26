import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/background';
// import { Container } from './styles';

const Profile = () => {
    return <Background />;
};

export default Profile;

Profile.navigationOptions = {
    tabBarLabel: 'Meu Perfil',
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({tintColor}) => (
        <Icon name="person" size={20} color={tintColor} />
    ),
};
