/* eslint-disable consistent-return */
// Usuario - Esse reducer de user e responsavel pelas informacoes do usuario
import produce from 'immer'; // manipular o estato

const initialState = {
    profile: null,
};

export default function User(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@auth/SIGN_IN_SUCESS': {
                draft.profile = action.payload.user;
                break;
            }

            case '@user/UPDATE_PROFILE_SUCCESS': {
                draft.profile = action.payload.profile;
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.profile = null;
                break;
            }
            default:
                return state;
        }
    });
}
