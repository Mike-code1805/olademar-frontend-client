import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { logout } from "../redux/userRedux";
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
  background-color: #FA9100;
  color: white;
  cursor: pointer;
  margin-left: 20px;
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail]= useState("");
  const history = useHistory();
  const gotoLogin = () => { history.push('/login') };
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClickRegister = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, email }); 
    
  };
  const handleClickLogin = () => {
    dispatch(logout());  
    gotoLogin();  
  };
  console.log(error);
  console.log(isFetching);
  return (
    <Container>
      <Envoltorio>
        <Title>CREAR UNA CUENTA</Title>
        <Form>
          <Input placeholder="Nombre de usuario" 
          onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="Contraseña" 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="Confirmar contraseña" type="password" 
          />
          <Agreement>
            Al crear una cuenta, doy consentimieto del uso de mis
            datos personales acorde a la <b>POLÍTICA DE PRIVACIDAD</b>
          </Agreement>
          <Button onClick={handleClickRegister} disabled={isFetching}>CREAR 
          </Button>          
          <Button onClick={handleClickLogin} disabled={isFetching}>INICIAR SESION</Button>
          {error && <Error>Digite bien sus credenciales...</Error>}
          
        </Form>
      </Envoltorio>
    </Container>
  );
};

export default Register;
