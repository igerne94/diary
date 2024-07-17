import './LeftPannel.css';

const LeftPannel = ({ children }) => {
    return (
        <div className='left-panel'>
            {children}
        </div>
    );
};

export default LeftPannel;