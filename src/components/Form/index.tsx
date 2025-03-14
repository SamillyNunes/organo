import './Form.css';
import CustomInput from "../CustomInput";
import CustomDropdown from '../CustomDropdown';
import Button from '../Button';
import { useState } from 'react';
import { IColaborator } from '../../shared/interfaces/IColaborator';

interface FormProps {
    teamsNames: string[]
    onSaveEmployee: (colaborator: IColaborator) => void
    onSaveTeam: (team: ITeam) => void
}

const Form = ({ teamsNames, onSaveEmployee, onSaveTeam }: FormProps) => {

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [team, setTeam] = useState('');
    const [date, setDate] = useState('');

    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const onSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form foi submetido! => ', name, job, imageUrl, team);
        onSaveEmployee({
            name,
            job,
            imageUrl,
            team,
            startDate: date,
        });
        setName('');
        setJob('');
        setTeam('');
        setDate('');
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
                <CustomInput
                    label='Data de entrada no time'
                    placeholder=''
                    type='date'
                    value={date}
                    onChange={setDate}
                />
                <CustomDropdown
                    label="Equipes"
                    teamNames={teamsNames}
                    required
                    value={team}
                    onChange={v => setTeam(v)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSaveTeam({ name: teamName, color: teamColor });
                setTeamName('');
                setTeamColor('');
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
                    type='color'
                    onChange={v => setTeamColor(v)}
                />
                <Button>

                    Criar um novo Time

                </Button>
            </form>
        </section>
    );
}

export default Form;