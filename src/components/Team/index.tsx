import { IColaborator } from "../../shared/interfaces/IColaborator";
import "./Team.css";
import hexToRgba from "hex-to-rgba";
import EmployeeCard from "../EmployeeCard";

interface TeamProps {
  team: ITeam
  staff: IColaborator[]
  onEmployeeFavorited: (employeeId: string) => void
  onDeleteEmployee: (employee: IColaborator) => void
  changeTeamColor: (color: string, teamId: string) => void
}

const Team = ({ team, staff, onDeleteEmployee, changeTeamColor, onEmployeeFavorited }: TeamProps) => {
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
          onChange={(e) => changeTeamColor(e.target.value, team.id!)}
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
          {staff.map((s) =>
            <EmployeeCard
              key={s.name}
              backgroundColor={team.color}
              employee={s}
              onDelete={onDeleteEmployee}
              onFavorited={onEmployeeFavorited}
            />
          )}
        </div>
      </section>
    )
  );
};

export default Team;