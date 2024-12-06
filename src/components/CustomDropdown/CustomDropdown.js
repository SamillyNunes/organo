import './CustomDropdown.css';

export const CustomDropdown = (props) =>{
    return (
        <div className='dropdown'>
            <label> {props.label} </label>
            <select required={props.required}>
                {
                   props.itens.map(item => <option key={item}> {item} </option>) 
                }
            </select>
        </div>
    );
}