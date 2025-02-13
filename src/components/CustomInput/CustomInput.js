import './CustomInput.css';

export const CustomInput = ({label, placeholder, value, required, onChange, type='text'}) => {

    return (
        <div className={`custom-input i-${type}`}>
            <label>{label}</label>
            <input 
                value={value}
                placeholder={placeholder} 
                required={required}  
                type={type}
                onChange={(e)=>onChange(e.target.value)}
            />
        </div>
    );
}