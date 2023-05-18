import { AnimatePresence } from 'framer-motion';
import React, { InputHTMLAttributes } from 'react';

import { AnimateBox } from 'shared/ui';

import styles from './styles.module.scss';

type Props = {
    title: string;
    error: string;
    loading: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

function Input(props: Props) {
    const { title, error, loading, ...other } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <input className={styles.input} {...other} />
            <AnimatePresence>{!!error && <AnimateBox className={styles.error}>{error}</AnimateBox>}</AnimatePresence>
        </div>
    );
}

export default Input;
