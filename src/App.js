import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

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
    </div>
  );
}

export default App;
