import './CustomDropdown.css';

interface CustomDropdownProps {
    value: string
    label: string
    required: boolean
    onChange: (value: string) => void
    teamNames: string[]
}

const CustomDropdown = ({ value, label, onChange, required, teamNames }: CustomDropdownProps) => {
    return (
        <div className='dropdown'>
            <label> {label} </label>
            <select
                onChange={e => onChange(e.target.value)}
                required={required}
                value={value}
            >
                <option></option>
                {
                    teamNames.map(teamName => <option key={teamName}> {teamName} </option>)
                }
            </select>
        </div>
    );
}

export default CustomDropdown;