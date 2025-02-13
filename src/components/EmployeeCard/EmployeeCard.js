import { IoIosCloseCircle } from "react-icons/io";
import "./EmployeeCard.css";

export const EmployeeCard = ({ employee, backgroundColor, onDelete }) => {
  return (
    <div className="employee" onClick={()=> onDelete(employee)}>
      <IoIosCloseCircle size={25} className="delete" />
      <div
        className="head"
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <img src={employee.image} alt="Samilly Nunes" />
      </div>
      <div className="foot">
        <h4>{employee.name}</h4>
        <h5> {employee.job} </h5>
      </div>
    </div>
  );
};
