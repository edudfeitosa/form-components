import React from "react";
import styles from "./alerts.module.scss";

type AlertProps = React.ComponentProps<'div'> & {
    type?: 'success' | 'info' | 'alert' | 'error';
    children: React.ReactNode;
}

const Alerts = ({type = 'alert', children, ...props}: AlertProps) => (
    <div className={styles.alerts} {...props}>
        <div className={styles[type]}>
            {children}
        </div>
    </div>
);

export default Alerts;