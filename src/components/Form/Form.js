import './Form.css';
import CustomInput from "../CustomInput";
import CustomDropdown from '../CustomDropdown';
import { Button } from '../Button/Button';

export const Form = ()=>{

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ];

    const onSave = (event) =>{
        event.preventDefault();
        console.log('Form foi submetido!');
    }

    return (
        <section className="custom_form">
            <form onSubmit={onSave} >  
                <h2>Preencha os dados para criar o card do colaborador</h2>              
                <CustomInput label="Nome" placeholder="Digite seu nome" required />
                <CustomInput label="Cargo" placeholder="Digite seu cargo" required />
                <CustomInput label="Imagem" placeholder="Digite o endereço da imagem" required />
                <CustomDropdown label="Equipes" itens={teams} required />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}