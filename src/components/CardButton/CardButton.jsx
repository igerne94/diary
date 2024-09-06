// Container component for the card button
import './CardButton.css';

function CardButton({ children, className, ...props }) {
    const cl = 'card-button' + (className ? ' ' + className : '');

    // The children prop represents whatever 
    // is placed between the opening and closing tags
    // of CardButton in the JSX
    return (
        <div {...props} className={cl}>
            {children}
        </div>
    );
}

export default CardButton;