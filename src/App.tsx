import { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team";
import Banner from "./components/Banner";
import CustomFooter from "./components/CustomFooter";
import { v4 as uuid } from "uuid";
import { IColaborator } from "./shared/interfaces/IColaborator";

function App() {
  const [teams, setTeams] = useState<ITeam[]>([
    {
      id: uuid(),
      name: "Programação",
      color: "#57C278",
    },
    {
      id: uuid(),
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      id: uuid(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuid(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuid(),
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      id: uuid(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuid(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [staff, setStaff] = useState<IColaborator[]>([
    {
      id: uuid(),
      name: "Samilly Nunes",
      job: "Data Engineer",
      imageUrl: "https://github.com/SamillyNunes.png",
      team: teams[2].name,
      favorite: true,
    },
    {
      id: uuid(),
      name: "Leonardo Oliveira",
      job: "Security Engineer",
      imageUrl: "https://github.com/Leonardo1952.png",
      team: teams[3].name,
      favorite: false,
    },
    {
      id: uuid(),
      name: "Leo",
      job: "Dev Front-End",
      imageUrl: "https://github.com/Leonardo1952.png",
      team: teams[1].name,
      favorite: false,
    },
    {
      id: uuid(),
      name: "Samilly Nunes",
      job: "Front-end developer",
      imageUrl: "https://github.com/SamillyNunes.png",
      team: teams[1].name,
      favorite: false,
    },
  ]);

  function changeTeamColor(color: string, teamId: string) {
    setTeams(
      teams.map((t) => {
        if (t.id === teamId) {
          t.color = color;
        }
        return t;
      })
    );
  }

  function deleteEmployee(employee: IColaborator) {
    console.log("deletando");
    setStaff(staff.filter((s) => s.id !== employee.id));
  }

  const saveEmployee = (newEmployee: IColaborator) => {
    console.log(newEmployee);
    /// Abaixo esta espalhando a lista com os colaboradores que ja tinha e adiciona o novo||||||||
    setStaff([...staff, { ...newEmployee, id: uuid() }]);
  };

  const saveNewTeam = (newTeam: ITeam) => {
    setTeams([...teams, { ...newTeam, id: uuid() }]);
  };

  const onEmployeeFavorited = (employeeId: string) => {
    setStaff(
      staff.map((employee) => {
        if (employee.id === employeeId) employee.favorite = !employee.favorite;
        return employee;
      })
    );
  };

  return (
    <div className="App">
      <Banner
        imageUrl="/images/banner.png"
        alt="Banner principal da página do Organo"
      />
      <Form
        teamsNames={teams.map((t) => t.name)}
        onSaveEmployee={saveEmployee}
        onSaveTeam={saveNewTeam}
      />
      {teams.map((team) => (
        <Team
          key={team.id}
          staff={staff.filter((s) => s.team === team.name)}
          team={team}
          changeTeamColor={changeTeamColor}
          onDeleteEmployee={deleteEmployee}
          onEmployeeFavorited={onEmployeeFavorited}
        />
      ))}
      <CustomFooter />
    </div>
  );
}

export default App;
