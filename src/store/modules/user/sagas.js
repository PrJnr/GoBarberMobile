/* eslint-disable no-unused-vars */
import {all, takeLatest, call, put} from 'redux-saga/effects';

import {Alert} from 'react-native';

import api from '~/services/api';

import {updateProfileFailure, updateProfileSucess} from './actions';

export function* updateProfile({payload}) {
    try {
        const {name, email, avatar_id, ...rest} = payload.data;

        const profile = Object.assing(
            {
                name,
                email,
                avatar_id,
            },
            ...(rest.oldPassword ? rest : {}),
        );

        const response = yield call(api.put, 'users', profile);

        Alert.alert('Sucesso', 'Perfil atualizado com sucesso');

        yield put(updateProfileSucess(response.data));
    } catch (err) {
        Alert.alert(
            'Erro na atualização',
            'Erro ao atualizar perfil, verifique seus dados!',
        );

        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
