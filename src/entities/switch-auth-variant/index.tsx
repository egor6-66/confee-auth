import React from 'react';

import styles from './styles.module.scss';
import { Icons, IconsVariants } from '../../shared/ui';

function SwitchAuthVariantView() {
    const icons: IconsVariants[] = ['ad', 'vk', 'google', 'apple'];

    const iconClick = (variant: IconsVariants) => {};

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Войти с помощью</div>
            <div className={styles.icons}>
                {icons.map((icon) => (
                    <div key={icon} onClick={() => iconClick(icon)}>
                        <Icons variant={icon} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SwitchAuthVariantView;
