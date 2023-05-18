import React from 'react';

import AuthByPhoneOrEmail from 'features/auth-by-phone-or-email';
import SwitchAuthVariant from 'features/switch-auth-variant';
import { Icons } from 'shared/ui';

import styles from './styles.module.scss';

function MainPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}>
                <Icons variant="bg" />
            </div>
            <div className={styles.header}>
                <Icons variant="logo" />
            </div>
            <div className={styles.main}>
                <AuthByPhoneOrEmail />
            </div>
            <div className={styles.footer}>
                <SwitchAuthVariant />
            </div>
        </div>
    );
}

export default MainPage;
