import React, { forwardRef } from "react";
import styles from './input.module.scss';

type InputProps = React.ComponentProps<'input'> & {
    label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({label, ...props}, ref) => (
    <div className={styles.input}>
        <label>{label}</label>
        <input ref={ref} {...props} />
    </div>
));

export default Input;