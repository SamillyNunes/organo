import './StaffCard.css';

export const StaffCard = ({name, image, job}) => {
    return (
        <div className='staff'>
            <div className='head'>
                <img src={image} alt='Samilly Nunes' />
            </div>
            <div className='foot'>
                <h4>{name}</h4>
                <h5> {job} </h5>
            </div>
        </div>
    );
}