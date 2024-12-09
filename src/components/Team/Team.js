import StaffCard from '../StaffCard';
import './Team.css';

export const Team = (props) => {
    return (
         (props.staff.length>0) && <section className='team' style={{
            backgroundColor: props.secondaryColor
        }}>
            <h3 style={{
                borderColor: props.primaryColor
            }} > {props.name} </h3>
            <div className='allStaff'>
                {
                    props.staff.map(s => 
                        <StaffCard 
                            key={s.name}
                            backgroundColor={props.primaryColor}
                            name={s.name} 
                            job={s.job} 
                            image={s.imageUrl}
                    />)
                }
            </div>
        </section>
    );
}