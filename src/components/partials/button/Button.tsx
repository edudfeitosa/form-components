import React from "react";
import styles from "./button.module.scss";

type ButtonProps = React.ComponentProps<'button'> & {
    title: string
}

const Button = ({title, ...props}: ButtonProps) => (
    <div className={styles.button}>
        <button{...props}>{title}</button>
    </div>
);

export default Button;