import { FC } from 'react';
import styles from './Header.module.scss';
import LogoSvg from '../../assets/svg/Gazprom-Logo-rus.svg';

const Header: FC = () => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={LogoSvg} />
            </div>
            <nav className={styles.nav}>
                <button onClick={handleClick} className={styles.button}>
                    ВЫХОД
                </button>
            </nav>
        </header>
    );
};

export default Header;
