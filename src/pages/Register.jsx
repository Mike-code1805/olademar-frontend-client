import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("http://drive.google.com/uc?export=view&id=1lQ5HRyr5to66rpqy3vgOh48NRjwgINoX")
      center;
  background-size: cover;
  background-color: #FBFFCA;
  display: flex;
  align-items: center;
`;

const Envoltorio = styled.div`
  width: 40%;
  padding: 40px;
  background-color: white;
  align-items: right;
  margin-left: 80px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Envoltorio>
        <Title>CREAR UNA CUENTA</Title>
        <Form>
          <Input placeholder="Nombres" />
          <Input placeholder="Apellidos" />
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Email" />
          <Input placeholder="Contraseña" 
          type="password"
          />
          <Input placeholder="Confirmar contraseña" type="password" />
          <Agreement>
            Al crear una cuenta, doy consentimieto del uso de mis
            datos personales acorde a la <b>POLÍTICA DE PRIVACIDAD</b>
          </Agreement>
          <Button>CREAR</Button>
        </Form>
      </Envoltorio>
    </Container>
  );
};

export default Register;
