import React, { useCallback, useEffect, useState } from 'react';

import { 
  Container,
  MainContainer,
  ContentContainer,
} from './styles';

import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';
import Select from '../../components/Select';

interface IDoctor {
  name: string,
  crm: string,
  telephone: string,
  city: string,
  state: string,
  specialty: string[],
}

interface ISpecialty {
  id: string,
  name: string;
}

const NewDoctor: React.FC = () => {
  const [specialties, setSpecialties] = useState<ISpecialty[]>([]);
  const [crm, setCrm] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [tempSpecialty, setTempSpecialty] = useState('');
  const [specialtiesSelected, setSpecialtiesSelected] = useState(['']);

  useEffect(() => {
    async function loadSpecialties() {
      const response = await api.get('specialty');

      setSpecialties(response.data);
    }

    loadSpecialties();
  }, []);

  const handleSubmit = useCallback(async () => {
    specialtiesSelected.shift();
    await api.post('doctor', {
      name,
      crm,
      telephone,
      city,
      state,
      specialtyId: specialtiesSelected
    })
  }, [city, crm, name, specialtiesSelected, state, telephone]);

  const handleAddSpecialty = useCallback((id: string) => {
    setSpecialtiesSelected([...specialtiesSelected, id])
  }, [specialtiesSelected]);
  
  return (
    <>
      <Container>
        <MainContainer>
          <h1>Criação de novo médico no sistema</h1>
          <ContentContainer>
            <input 
            placeholder="Digite o CRM"
            value={crm}
            onChange={e => setCrm(e.target.value)}
           />

            <input 
            placeholder="Digite o nome"
            value={name}
            onChange={e => setName(e.target.value)}
           />

           <input 
            placeholder="Digite o telefone"
            value={telephone}
            onChange={e => setTelephone(e.target.value)}
           />

            <input 
            placeholder="Digite a cidade"
            value={city}
            onChange={e => setCity(e.target.value)}
           />

           <input 
           placeholder="Digite o estado"
           value={state}
           onChange={e => setState(e.target.value)}
            />

          <Select
            name="tempSpecialty"
            label="Matéria"
            value={tempSpecialty}
            onChange={e => {setTempSpecialty(e.target.value)}}
            options={specialties.map(specialty => (
              { value: specialty.id, label: specialty.name }
            )
            )}
          />
            <Button onClick={() => handleAddSpecialty(tempSpecialty)} type="button">Adicionar</Button>
          </ContentContainer>

          <Link to="/">
            <Button onClick={handleSubmit} type="button">Confirmar</Button>
          </Link>
        </MainContainer>
      </Container>
    </>
  );
}

export default NewDoctor;