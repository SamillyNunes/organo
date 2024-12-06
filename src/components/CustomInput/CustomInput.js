import './CustomInput.css';

export const CustomInput = (props) => {

    return (
        <div className="custom-input">
            <label>{props.label}</label>
            <input 
                value={props.value}
                placeholder={props.placeholder} 
                required={props.required}  
                onChange={(e)=>props.onChange(e.target.value)}
            />
        </div>
    );
}