import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [staff, setStaff] = useState([]);

  const saveStaff = (staff) => {
    console.log(staff);
    /// Abaixo esta espalhando a lista com os colaboradores que ja tinha e adiciona o novo||||||||
    setStaff([...staff, staff]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onSaveStaff={staff => saveStaff(staff)} />
      <Team name="Programação" />
      <Team name="Front-End" />
      <Team name="Data Science" />
    </div>
  );
}

export default App;
