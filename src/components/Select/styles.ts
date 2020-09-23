import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 20px;

label {
  font-size: 16px;
}

select {
  width: 100%;
  height: 40px;
  margin-top: 8px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #000;
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
}

&:focus-within::after {
  width: calc(100% - 32px);
  height: 2px;
  content: '';
  background: #fff;
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 0;
}

`;
