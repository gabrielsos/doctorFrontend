import React, { useCallback, useEffect, useState } from 'react';

import { 
  Container,
  MainContainer,
  ContentContainer,
  LeftContainer,
  SideContainer,
  ButtonContainer,
} from './styles';

import { FiEdit, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';

interface IDoctor {
  name: string,
  crm: string,
  telephone: string,
  city: string,
  state: string,
  specialty: string[],
}

const Home: React.FC = () => {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const [crm, setCrm] = useState('');

  async function loadDoctors() {
    const response = await api.get('doctor');

    setDoctors(response.data);
  }

  useEffect(() => {
    loadDoctors();
  }, []);

  const handleDoctorEdit = useCallback((id: string) => {
    localStorage.setItem('doctorCRM', id);
  }, []);

  const handleDoctorDelete = useCallback(async (crm: string) => {
    await api.delete(`doctor/${crm}`);

    setDoctors(doctors.filter(doctor => doctor.crm === crm));
    loadDoctors();
  }, [doctors]);

  const handleCrmSearch = useCallback(() => {
    if(!crm) {
      loadDoctors();
    }
    setDoctors(doctors.filter(doctor => doctor.crm === crm));
  }, [crm, doctors]);
  
  return (
    <>
      <Container>
        <MainContainer>
          <input 
            placeholder="Digite o CRM"
            value={crm}
            onChange={e => setCrm(e.target.value)}
          />
          <ButtonContainer>
            <Button type="button" onClick={handleCrmSearch}>Pesquisar</Button>
            <Button type="button" onClick={loadDoctors}>Limpar</Button>
          </ButtonContainer>
          <ContentContainer>
            <Link to="new-doctor">
              <Button>Novo médico</Button>
            </Link>
            <ul>
              {doctors.map(doctor => (
                <li key={doctor.crm}>
                  <LeftContainer>
                    <p>Dr. {doctor.name}</p>
                    <p>CRM: {doctor.crm}</p>
                    <p>Telefone: {doctor.telephone}</p>
                    <p>Cidade: {doctor.city} - {doctor.state}</p>
                    <p>{doctor.specialty}</p>
                  </LeftContainer>
                  <SideContainer>
                    <Link to="update-doctor">
                      <FiEdit cursor="pointer" size={24} onClick={() => handleDoctorEdit(doctor.crm)}/>
                    </Link>
                    <FiTrash cursor="pointer" size={24} onClick={() => handleDoctorDelete(doctor.crm)}/>
                  </SideContainer>
                </li>
              ))}
            </ul>
          </ContentContainer>
        </MainContainer>
      </Container>
    </>
  );
}

export default Home;