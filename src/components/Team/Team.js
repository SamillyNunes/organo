import StaffCard from "../StaffCard";
import "./Team.css";

export const Team = ({team, staff, onDeleteStaff}) => {
  return (
    staff.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: team.secondaryColor,
        }}
      >
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
              <StaffCard
                key={s.name}
                backgroundColor={team.primaryColor}
                employee={s}
                onDelete={onDeleteStaff}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
