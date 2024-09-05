import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import { useState } from 'react';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

const Header = () => {
    console.log('Header rendered');
    const [logoIndex, setLogoIndex] = useState(0);
    const loggleLogo = () => {
        // the result of the callback function should be memoized
        //...if no params change.
        //...And the function will not be recreated
        setLogoIndex(logoIndex => Number(!logoIndex));
    };

    // const loggleLogo = useCallback(() => {
    //     setLogoIndex(logoIndex => Number(!logoIndex));
    // }, [logoIndex]);
    
    return (
        <>
            <Logo image={logos[logoIndex]} />
            <SelectUser />
            <Button onClick={loggleLogo}>Toggle Logo</Button>
        </>
    );
};

export default Header;