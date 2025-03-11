import './CustomInput.css';

interface CustomInputProps {
    label: string
    placeholder: string
    value: string
    required?: boolean
    type: string
    onChange: (value: string) => void
}

const CustomInput = ({ label, placeholder, value, required, onChange, type = 'text' }: CustomInputProps) => {

    return (
        <div className={`custom-input i-${type}`}>
            <label>{label}</label>
            <input
                value={value}
                placeholder={placeholder}
                required={required}
                type={type}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default CustomInput;