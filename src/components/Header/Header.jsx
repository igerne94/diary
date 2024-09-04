import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import { useState } from 'react';

const logos = ['/logo.svg', '/vite.svg'];

const Header = () => {
    const [logoIndex, setLogoIndex] = useState(0);
    const loggleLogo = () => {
        setLogoIndex(logoIndex => Number(!logoIndex));
    };
    
    return (
        <>
            <img className={styles.logo} src={logos[logoIndex]} alt='Logo' />
            <SelectUser />
            <Button onClick={loggleLogo}>Toggle Logo</Button>
        </>
    );
};

export default Header;