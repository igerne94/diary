import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import { useState } from 'react';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

const Header = () => {
    const [logoIndex, setLogoIndex] = useState(0);
    const loggleLogo = () => {
        setLogoIndex(logoIndex => Number(!logoIndex));
    };
    
    return (
        <>
            <Logo image={logos[logoIndex]} />
            <SelectUser />
            <Button onClick={loggleLogo}>Toggle Logo</Button>
        </>
    );
};

export default Header;