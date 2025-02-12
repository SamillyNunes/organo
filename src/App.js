import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import CustomFooter from "./components/CustomFooter";

function App() {
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#57C278",
    },
    {
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      name: "Data Science",
      color: "#A6D157",
    },
    {
      name: "Devops",
      color: "#E06B69",
    },
    {
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [staff, setStaff] = useState([]);

  function changeTeamColor(color, teamName) {
    setTeams(
      teams.map((t) => {
        if (t.name === teamName) {
          t.color = color;
        }
        return t;
      })
    );
  }

  function deleteEmployee(employee) {
    console.log("deletando");
    setStaff(staff.filter((s) => s.name !== employee.name));
  }

  const saveEmployee = (newEmployee) => {
    console.log(newEmployee);
    /// Abaixo esta espalhando a lista com os colaboradores que ja tinha e adiciona o novo||||||||
    setStaff([...staff, newEmployee]);
  };

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map((t) => t.name)} onSaveEmployee={saveEmployee} />
      {teams.map((team) => (
        <Team
          key={team.name}
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
