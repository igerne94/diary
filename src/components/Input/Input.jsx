import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(
    function Input({ className, isValid = true, appearance, ...rest }, ref) {
        // "...rest" is an object that contains all the props that are
        // not destructured as, for example, className, isValid, appearance
        return (
            <input
                {...rest}
                ref={ref}
                className={cn(className, styles['input'], {
                    [styles['invalid']]: !isValid,
                    [styles['input-title']]: appearance === 'title'
                })}
            />
        );
    }
);

export default Input;