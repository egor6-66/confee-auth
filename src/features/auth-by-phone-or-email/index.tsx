import React, { useEffect, useState } from 'react';

import { AuthByPhoneOrEmailView, AuthByPhoneOrEmailApi } from 'entities/auth-by-phone-or-email';
import { useReverseTimer } from 'shared/hooks';

function AuthByPhoneOrEmail() {
    const { mutate: handleRequestCode, isLoading } = AuthByPhoneOrEmailApi.handleRequestCode();

    const { start, time, reset } = useReverseTimer({ seconds: 5 });

    const [firstSend, setFirstSend] = useState(true);
    const [authVariant, setAuthVariant] = useState<{ type: 'phone' | 'email'; value: string } | null>(null);
    const [error, setError] = useState('');
    const [sendCodeFormVisible, setSendCodeFormVisible] = useState(false);

    const requestCode = (value: string) => {
        if (value[0] === '+') {
            if (!/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(value) || value.length !== 12) {
                return setError('Некорректный номер телефона');
            }
            setAuthVariant({ type: 'phone', value });
        } else {
            if (!/^\S+@\S+\.\S+$/.test(value)) {
                return setError('Некорректный email');
            }
            setAuthVariant({ type: 'email', value });
        }
        setError('');
        setSendCodeFormVisible(!sendCodeFormVisible);
    };

    const sendCode = (value: string) => {
        setFirstSend(false);
        start();
    };

    const back = () => {
        setSendCodeFormVisible(false);
        setAuthVariant(null);
        setFirstSend(true);
        setError('');
        reset();
    };

    useEffect(() => {
        error && setTimeout(() => setError(''), 3000);
    }, [error]);

    return (
        <AuthByPhoneOrEmailView
            firstSend={firstSend}
            authVariant={authVariant}
            time={time.pop()}
            error={error}
            requestCode={requestCode}
            sendCode={sendCode}
            sendCodeFormVisible={sendCodeFormVisible}
            back={back}
        />
    );
}

export default AuthByPhoneOrEmail;
