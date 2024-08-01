const SelectUser = ({ changedUser }) => {
    const changeUser = (e) => {
        changedUser(e.target.value);
    }
    
    return (
        <>
            <select name="user" id="user" onChange={changeUser}>
                <option value='1'>User 1</option>
                <option value='2'>User 2</option> 
            </select>
        </>
    );
};

export default SelectUser;