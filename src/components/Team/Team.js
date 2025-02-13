import EmployeeCard from "../EmployeeCard";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

export const Team = ({ team, staff, onDeleteEmployee, changeTeamColor }) => {
  return (
    staff.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: hexToRgba(team.color, 0.5),  
        }}
      >
        <input
          type="color"
          value={team.color}
          onChange={(e) => changeTeamColor(e.target.value, team.id)}
          className="input-color"
        />
        <h3
          style={{
            borderColor: team.color,
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
                backgroundColor={team.color}
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
