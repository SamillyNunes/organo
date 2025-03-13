import { ReactElement } from 'react';
import './Button.css';

interface ButtonProps{
    children: ReactElement | string,
}

export default function Button(props: ButtonProps){
    return (
        <button className='custom-btn'>
            {props.children}
        </button>
    );
}