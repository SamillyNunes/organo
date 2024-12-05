import './Form.css';
import CustomInput from "../CustomInput";

export const Form = ()=>{
    return (
        <section className="custom_form">
            <form>  
                <h2>Preencha os dados para criar o card do colaborador</h2>              
                <CustomInput label="Nome" placeholder="Digite seu nome" />
                <CustomInput label="Cargo" placeholder="Digite seu cargo" />
                <CustomInput label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    );
}