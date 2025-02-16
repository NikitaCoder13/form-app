import React, { FC } from 'react';
import styles from './BlueButton.module.scss';

interface BlueButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
}

const BlueButton: FC<BlueButtonProps> = ({ children, onClick, type, className }) => {
    return (
        <button type={type} className={`${styles.blueButton} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};
export default BlueButton;
