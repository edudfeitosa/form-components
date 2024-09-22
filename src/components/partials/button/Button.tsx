import React from "react";
import styles from "./button.module.scss";

type ButtonProps = React.ComponentProps<'button'> & {
    children: React.ReactNode;
}

const Button = ({children, ...props}: ButtonProps) => (
    <div className={styles.button}>
        <button{...props}>{children}</button>
    </div>
);

export default Button;