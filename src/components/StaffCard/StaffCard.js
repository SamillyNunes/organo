import { IoIosCloseCircle } from "react-icons/io";
import "./StaffCard.css";

export const StaffCard = ({ employee, backgroundColor, onDelete }) => {
  return (
    <div className="staff" onClick={()=> onDelete(employee)}>
      <IoIosCloseCircle size={25} className="delete" />
      <div
        className="head"
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <img src={employee.imageUrl} alt="Samilly Nunes" />
      </div>
      <div className="foot">
        <h4>{employee.name}</h4>
        <h5> {employee.job} </h5>
      </div>
    </div>
  );
};
