import './Button.css';

const doSomething = () => { 
    console.log('Button clicked');
};

const Button = () => {
    return (
        <button className='button accent' onClick={doSomething}>Save</button>
    );
};

export default Button;