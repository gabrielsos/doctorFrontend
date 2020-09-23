import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  flex-direction: row;
  background: #330538;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    flex:1;
    background: transparent;
    background: #EDEDED;
    margin-top: 10px;
    padding: 10px;
    width: 40%;
    border-radius: 20px;
    color: #000;

    &::placeholder {
      color: #000000;
    }
  }

  button {
    width: 200px;  
  }
`;

export const SpecialtyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
background: #fff;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin-top: 30px;

ul {
  width: 100%;
}

ul li{
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  height: 200px;
  background: #000;
  margin-top: 20px;
}

ul li p {
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: #fff;
  margin-left: 20px;
}
`;

export const SideContainer = styled.div`
  img {
  width: 100%;
  height: 600px;
  }
`;

export const FooterImage = styled.div`
  position: absolute;
  z-index: -2;
  width: 100vh;
  right: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;
