import './Form.css';
import CustomInput from "../CustomInput";
import CustomDropdown from '../CustomDropdown';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const Form = ({ teams, onSaveEmployee, onSaveTeam })=>{

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [team, setTeam] = useState('');
    
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const onSave = (event) =>{
        event.preventDefault();
        console.log('Form foi submetido! => ', name, job, imageUrl, team);
        onSaveEmployee({
            name, 
            job,
            imageUrl,
            team
        });
        setName('');
        setJob('');
        setTeam('');
        setImageUrl('');
    }

    return (
        <section className="custom_form">
            <form onSubmit={onSave} >  
                <h2>Preencha os dados para criar o card do colaborador</h2>              
                <CustomInput 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    required
                    value={name} 
                    onChange={v => setName(v)}                    
                />
                <CustomInput 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    required 
                    value={job} 
                    onChange={v => setJob(v)}   
                />
                <CustomInput 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    required 
                    value={imageUrl} 
                    onChange={v => setImageUrl(v)}  
                    
                />
                <CustomDropdown 
                    label="Equipes" 
                    itens={teams} 
                    required 
                    value={team} 
                    onChange={v => setTeam(v)}  
                />
                <Button>
                    Criar Card
                </Button>
            </form>
            <form onSubmit={(e)=> {
                e.preventDefault();
                onSaveTeam({name: teamName, color: teamColor});
            }} >  
                <h2>Preencha os dados para criar um novo time.</h2>              
                <CustomInput 
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    required
                    value={teamName} 
                    onChange={v => setTeamName(v)}                    
                />
                <CustomInput 
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    required 
                    value={teamColor} 
                    type={'color'}
                    onChange={v => setTeamColor(v)}   
                />
                <Button>
                    Criar um novo Time
                </Button>
            </form>
        </section>
    );
}