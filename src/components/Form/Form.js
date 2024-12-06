import './Form.css';
import CustomInput from "../CustomInput";
import CustomDropdown from '../CustomDropdown';

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

    return (
        <section className="custom_form">
            <form>  
                <h2>Preencha os dados para criar o card do colaborador</h2>              
                <CustomInput label="Nome" placeholder="Digite seu nome" />
                <CustomInput label="Cargo" placeholder="Digite seu cargo" />
                <CustomInput label="Imagem" placeholder="Digite o endereço da imagem" />
                <CustomDropdown label="Equipes" itens={teams} />
            </form>
        </section>
    );
}