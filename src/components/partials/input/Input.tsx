import React from "react";
import styles from './input.module.scss';

type inputProps = React.ComponentProps<'input'> & {
    label: string;
}

const Input = ({label, ...props}: inputProps) => (
    <div className={styles.input}>
        <label>{label}</label>
        <input {...props} />
    </div>
);

export default Input;