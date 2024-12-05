import Banner from './components/Banner';
import CustomInput from './components/CustomInput';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CustomInput label="Nome" placeholder="Digite seu nome" />
      <CustomInput label="Cargo" placeholder="Digite seu cargo" />
      <CustomInput label="Imagem" placeholder="Digite o endereço da imagem" />
    </div>
  );
}

export default App;
