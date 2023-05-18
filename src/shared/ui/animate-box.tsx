import { motion, AnimationProps, MotionProps } from 'framer-motion';
import React, { HTMLAttributes } from 'react';

type Props = {} & HTMLAttributes<HTMLDivElement> & AnimationProps & MotionProps;

function AnimateBox(props: Props) {
    const visibleHidden = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div {...visibleHidden} {...props}>
            {props.children}
        </motion.div>
    );
}

export default AnimateBox;
