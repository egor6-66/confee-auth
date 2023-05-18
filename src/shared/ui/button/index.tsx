import React, { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: Props) {
    return (
        <button className={`${styles.wrapper} ${props.disabled && styles.wrapper_inactive}`} {...props}>
            {props.children}
        </button>
    );
}

export default Button;
