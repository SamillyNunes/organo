import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import CustomFooter from "./components/CustomFooter";
import { v4 as uuid } from "uuid";

function App() {
  const [teams, setTeams] = useState([
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

  const [staff, setStaff] = useState([
    {
      id: uuid(),
      name: "Samilly Nunes",
      job: "Data Engineer",
      image: "https://github.com/SamillyNunes.png",
      team: teams[2].name,
    },
    {
      id: uuid(),
      name: "Leonardo Oliveira",
      job: "Security Engineer",
      image: "https://github.com/Leonardo1952.png",
      team: teams[3].name,
    },
    {
      id: uuid(),
      name: "Leo",
      job: "Dev Front-End",
      image: "https://github.com/Leonardo1952.png",
      team: teams[1].name,
    },
    {
      id: uuid(),
      name: "Samilly Nunes",
      job: "Front-end developer",
      image: "https://github.com/SamillyNunes.png",
      team: teams[1].name,
    },
  ]);

  function changeTeamColor(color, teamId) {
    setTeams(
      teams.map((t) => {
        if (t.id === teamId) {
          t.color = color;
        }
        return t;
      })
    );
  }

  function deleteEmployee(employee) {
    console.log("deletando");
    setStaff(staff.filter((s) => s.id !== employee.id));
  }

  const saveEmployee = (newEmployee) => {
    console.log(newEmployee);
    /// Abaixo esta espalhando a lista com os colaboradores que ja tinha e adiciona o novo||||||||
    setStaff([...staff, {...newEmployee, id: uuid()}]);
  };

  const saveNewTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuid() }]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((t) => t.name)}
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
        />
      ))}
      <CustomFooter />
    </div>
  );
}

export default App;
