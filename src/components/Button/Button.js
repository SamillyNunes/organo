import './Button.css';

export const Button = (props) => {
    return (
        <button className='custom-btn'>
            {props.children}
        </button>
    );
}