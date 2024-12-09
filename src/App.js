import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import CustomFooter from './components/CustomFooter';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ];

  const [staff, setStaff] = useState([]);

  const saveStaff = (newStaff) => {
    console.log(newStaff);
    /// Abaixo esta espalhando a lista com os colaboradores que ja tinha e adiciona o novo||||||||
    setStaff([...staff, newStaff]);
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teams={teams.map(t=> t.name)} 
        onSaveStaff={saveStaff} 
      />
      {
        teams.map(team => 
          <Team 
            key={team.name} 
            name={team.name} 
            staff={staff.filter(s=> s.team===team.name)}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
          />
        )
      }
      <CustomFooter/>
    </div>
  );
}

export default App;
