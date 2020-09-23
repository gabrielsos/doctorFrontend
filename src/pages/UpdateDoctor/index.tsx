import React, { useCallback, useEffect, useState } from 'react';

import { 
  Container,
  MainContainer,
  ContentContainer,
  SpecialtyContainer
} from './styles';

import { FiEdit, FiTrash } from 'react-icons/fi';
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

const UpdateDoctor: React.FC = () => {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const [specialties, setSpecialties] = useState<ISpecialty[]>([]);
  const [crm, setCrm] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [tempSpecialty, setTempSpecialty] = useState('');
  const [specialtiesSelected, setSpecialtiesSelected] = useState(['']);

  async function loadDoctors() {
    const crm = localStorage.getItem('doctorCRM')
    const response = await api.get(`doctor/${crm}`);

    setDoctors(response.data);
  }

  useEffect(() => {
    loadDoctors();
  }, []);

  useEffect(() => {
    async function loadSpecialties() {
      const response = await api.get('specialty');

      setSpecialties(response.data);
    }

    loadSpecialties();
  }, []);

  const handleSubmit = useCallback(async () => {
    const crm = localStorage.getItem('doctorCRM');
    specialtiesSelected.shift();

    await api.put(`doctor`, {
      crm,
      name,
      telephone,
      city,
      state,
      specialtyId: specialtiesSelected
    })
  }, [city, name, specialtiesSelected, state, telephone]);

  const handleAddSpecialty = useCallback((id: string) => {
    setSpecialtiesSelected([...specialtiesSelected, id])
  }, [specialtiesSelected]);
  
  return (
    <>
      <Container>
        <MainContainer>
          <h1>Atualização de dados</h1>
          <ContentContainer>
            {doctors.map(doctor => (
              <>    
                <input 
                placeholder="Digite o nome"
                defaultValue={doctor.name}
                onChange={e => setName(e.target.value)}
              />
              <input 
                placeholder="Digite o telefone"
                defaultValue={doctor.telephone}
                onChange={e => setTelephone(e.target.value)}
              />
                <input 
                placeholder="Digite a cidade"
                defaultValue={doctor.city}
                onChange={e => setCity(e.target.value)}
              />
              <input 
              placeholder="Digite o estado"
              defaultValue={doctor.state}
              onChange={e => setState(e.target.value)}
                />
            </>
            ))}
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
          <SpecialtyContainer>
            <h1>{specialtiesSelected}</h1>
          </SpecialtyContainer>
          <Link to="">
            <Button onClick={handleSubmit} type="button">Confirmar</Button>
          </Link>
        </MainContainer>
      </Container>
    </>
  );
}

export default UpdateDoctor;