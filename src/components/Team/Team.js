import StaffCard from '../StaffCard';
import './Team.css';

export const Team = (props) => {
    return (
        <section className='team' style={{
            backgroundColor: props.secondaryColor
        }}>
            <h3 style={{
                borderColor: props.primaryColor
            }} > {props.name} </h3>
            {
                props.staff.map(s => 
                    <StaffCard 
                        name={s.name} 
                        job={s.job} 
                        image={s.imageUrl}
                        

                />)
            }
        </section>
    );
}