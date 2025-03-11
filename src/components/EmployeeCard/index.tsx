import { IoIosCloseCircle } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import "./EmployeeCard.css";
import { IColaborator } from "../../shared/interfaces/IColaborator";

interface EmployeeCardProps {
  employee: IColaborator
  backgroundColor: string
  onDelete: (employee: IColaborator) => void
  onFavorited: (employeeId: string) => void
}

const EmployeeCard = ({
  employee,
  backgroundColor,
  onDelete,
  onFavorited,
}: EmployeeCardProps) => {

  function favorite() {
    onFavorited(employee.id);
  }

  const favoriteProps = {
    size: 25,
    onClick: favorite
  }

  return (
    <div className="employee">
      <IoIosCloseCircle size={25} className="delete" onClick={() => onDelete(employee)} />
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
        <div className="favorite">
          {employee.favorite ? (
            <MdFavorite {...favoriteProps} color="#ff0000" />
          ) : (
            <MdFavoriteBorder {...favoriteProps} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;