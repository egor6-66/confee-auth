import { useMutation } from '@tanstack/react-query';

import { axiosClient } from 'shared/configs';

type HandleLogin = {
    username: string;
    password: string;
};

class AuthByPhoneOrEmailApi {
    handleRequestCode() {
        return useMutation((data: { phone: string }) => axiosClient.post('api/v2/users', data));
    }

    handleSendCode() {
        return useMutation((data: HandleLogin) => axiosClient.post('api/v2/authorization/login', { phone: data.username, code: data.password }));
    }
}

export default new AuthByPhoneOrEmailApi();
