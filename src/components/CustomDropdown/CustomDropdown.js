import './CustomDropdown.css';

export const CustomDropdown = (props) =>{
    return (
        <div className='dropdown'>
            <label> {props.label} </label>
            <select 
                onChange={e => props.onChange(e.target.value)}
                required={props.required} 
                value={props.value}
            >
                <option></option>
                {
                   props.itens.map(item => <option key={item}> {item} </option>) 
                }
            </select>
        </div>
    );
}