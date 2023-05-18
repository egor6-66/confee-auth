import { motion, AnimatePresence } from 'framer-motion';
import React, { InputHTMLAttributes, ReactNode } from 'react';
import ReactCodeInput from 'react-code-input';

import styles from './styles.module.scss';

type Props = {
    title: string;
    subtitle?: ReactNode;
    error: string;
    loading: boolean;
    onChange: (value: string) => void;
};

function InputCode(props: Props) {
    const { title, subtitle, error, loading, onChange } = props;

    const inputStyle: any = {
        display: 'flex',
        textAlign: 'center',
        width: '50px',
        borderRadius: '8px',
        fontSize: '16px',
        height: '48px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'rgba(42, 49, 60, 1)',
        border: '1px solid rgba(255, 255, 255, 1)',
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.input}>
                <ReactCodeInput
                    onChange={onChange}
                    inputStyle={inputStyle}
                    className={styles.reactInput}
                    type="number"
                    fields={5}
                    inputMode="numeric"
                    name=""
                />
            </div>
            <AnimatePresence>
                {!!subtitle && <motion.div className={styles.subtitle}>{subtitle}</motion.div>}
                {!!error && <motion.div className={styles.error}>{error}</motion.div>}
            </AnimatePresence>
        </div>
    );
}

export default InputCode;
