// Container component for the card button

function CardButton({ children, className }) {
    const cl = 'card-button ' + (className ? ' ' + className : '');

    // The children prop represents whatever 
    // is placed between the opening and closing tags
    // of CardButton in the JSX
    return (
        <div className={cl}>
            {children}
        </div>
    );
}

export default CardButton;