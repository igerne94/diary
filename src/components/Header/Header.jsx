import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectUser';

const Header = ({ changedUser }) => {
    const changeUser = (e) => {
        changedUser(e.target.value);
    }
    
    return (
        <>
            <img className={styles.logo} src='/logo.svg' alt='Logo' />
            <SelectUser changeUser={changeUser} />
        </>
    );
};

export default Header;