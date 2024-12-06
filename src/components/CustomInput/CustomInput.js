import './CustomInput.css';

export const CustomInput = (props) => {
    return (
        <div className="custom-input">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} required={props.required}  />
        </div>
    );
}