import EmployeeCard from "../EmployeeCard";
import "./Team.css";

export const Team = ({team, staff, onDeleteEmployee}) => {
  return (
    staff.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: team.secondaryColor,
        }}
      >
        <input type="color" value={team.primaryColor} className="input-color" />
        <h3
          style={{
            borderColor: team.primaryColor,
          }}
        >
          {" "}
          {team.name}{" "}
        </h3>
        <div className="allStaff">
          {staff.map((s) => {
            return (
              <EmployeeCard
                key={s.name}
                backgroundColor={team.primaryColor}
                employee={s}
                onDelete={onDeleteEmployee}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
