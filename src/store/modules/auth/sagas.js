/* eslint-disable no-console */
import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
// import history from '~/services/history';
import {signInSucess, signFailure} from './actions';

export function* signIn({payload}) {
    // payload vem do sigInRequest, que esta sendo ouvido no takeLatest
    try {
        const {email, password} = payload;

        const response = yield call(api.post, 'sessions', {
            // chamada API
            email,
            password,
        });

        const {token, user} = response.data;

        if (user.provider) {
            Alert.alert(
                'Erro no Login',
                'Usuario nao e prestador de servicos, utilizar app mobile',
            );
        }

        api.defaults.headers.authorization = `Bearer ${token}`;

        yield put(signInSucess(token, user));

        console.log({token, user});

        // history.push('/dashboard');
    } catch (error) {
        Alert.alert(
            'Falha na autenticação',
            'Falha na Autenticacao, verifique seus dados',
        );
        yield put(signFailure());
    }
}

export function* signUp({payload}) {
    try {
        const {name, email, password} = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password,
        });
        // history.push('/');
    } catch (err) {
        Alert.alert(
            'Erro ao realizar Cadastro',
            'Falha no Cadastro, Verifique seus dados!',
        );

        yield put(signFailure());
    }
}

export function setToken({payload}) {
    if (!payload) return;

    const {token} = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function signOut() {
    // eslint-disable-next-line no-restricted-globals
    history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
