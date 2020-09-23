import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 15px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  background: #330538;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    flex:1;
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

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
background: #330538;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 30px;

ul {
  width: 100%;
  align-items: center;
  justify-content: center;
}

ul li{
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  height: 200px;
  background: #330538;
  border: 3px solid #000;
  align-self: center;
  border-radius: 10px;
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
