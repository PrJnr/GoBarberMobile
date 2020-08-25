export function updateProfileRequest(data) {
    return {
        type: '@user/UPDATE_PROFILE_REQUEST',
        payload: { data },
    };
} // Action de request para atualizar o perfil com os dados do formulario que vem no "data"

export function updateProfileSucess(profile) {
    return {
        type: '@user/UPDATE_PROFILE_SUCCESS',
        payload: { profile },
    };
}

export function updateProfileFailure() {
    return {
        type: '@user/UPDATE_PROFILE_REQUEST',
    };
}
