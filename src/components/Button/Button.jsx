import './Button.css';
import { useState } from 'react';

function Button() {
    const [text, setText] = useState('Button clicked');
    const doSomething = () => { 
        setText('Button clicked again');
    };
    
    return (
        <button className='button accent' onClick={doSomething}>{text}</button>
    );
}

export default Button;