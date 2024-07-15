// Container component for the card button

function CardButton({ children }) { 
    // The children prop represents whatever 
    // is placed between the opening and closing tags
    // of CardButton in the JSX
    return (
        <div className='card-button'>
            {children}
        </div>
    );
}

export default CardButton;