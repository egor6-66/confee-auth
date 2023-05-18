import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import { useInput } from 'shared/hooks';
import { Button, Input, AnimateBox, InputCode, Icons } from 'shared/ui';

import styles from './styles.module.scss';

type Props = {
    firstSend: boolean;
    authVariant: { type: 'phone' | 'email'; value: string } | null;
    requestCode: (value: string) => void;
    sendCode: (value: string) => void;
    back: () => void;
    error: string;
    sendCodeFormVisible: boolean;
    time: number | undefined;
};

function AuthByPhoneOrEmailView(props: Props) {
    const { firstSend, authVariant, requestCode, sendCode, error, sendCodeFormVisible, back, time } = props;

    const phoneOrEmail = useInput();
    const [code, setCode] = useState('');

    const getSubtitle = () => {
        if (!authVariant) return '';
        if (!firstSend && time && time !== 35) return `Отправить заново через ${time} с`;
        if (!firstSend) return <span onClick={() => sendCode(code)}>Отправить заново?</span>;
        if (authVariant.type === 'phone') return `На номер ${authVariant.value} отправлен код подтверждения`;
        if (authVariant.type === 'email') return `На адрес ${authVariant.value} отправлен код подтверждения`;
    };

    const backArrowClick = () => {
        back();
    };

    return (
        <div className={styles.wrapper}>
            {sendCodeFormVisible && (
                <div className={styles.arrowBack} onClick={backArrowClick}>
                    <Icons variant="arrow" />
                </div>
            )}
            <AnimatePresence mode="wait">
                {sendCodeFormVisible ? (
                    <motion.div>
                        <AnimateBox className={styles.requestCodeForm}>
                            <InputCode subtitle={getSubtitle()} onChange={setCode} title="Введите код из СМС" error={error} loading={false} />
                            <Button disabled={code.length !== 5} onClick={() => sendCode(code)}>
                                Готово
                            </Button>
                        </AnimateBox>
                    </motion.div>
                ) : (
                    <AnimateBox className={styles.requestCodeForm}>
                        <Input placeholder="Телефон или email" title="Введите номер телефона или еmail" error={error} loading={false} {...phoneOrEmail} />
                        <Button disabled={!phoneOrEmail.value.length} onClick={() => requestCode(phoneOrEmail.value)}>
                            Отправить код
                        </Button>
                    </AnimateBox>
                )}
            </AnimatePresence>
        </div>
    );
}

export default AuthByPhoneOrEmailView;
