import React, { FC } from 'react';
import styles from './BlueButton.module.scss';

interface BlueButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const BlueButton: FC<BlueButtonProps> = ({ children, onClick }) => {
    return (
        <button className={styles.blueButton} onClick={onClick}>
            {children}
        </button>
    );
};
export default BlueButton;
