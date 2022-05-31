import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {

  const history = useHistory();

  const gotoTeddies = () => { history.push('/products/teddies') };
  const gotoNecklaces = () => { history.push('/products/necklaces') };
  const gotoKeychains = () => { history.push('/products/keychains') };
  const gotoHome = () => { history.push('/') };

  return (
    <Container>
      <Left>
        <Logo>OLA DE MAR.</Logo>
        <Desc>
        Gracias infinitamente por tu confianza y apoyo. 
        Al comprar aquí estás apoyando un pequeño negocio 
        donde todo se hace a mano y con mucho cariño, realmente significa mucho para mí.
        </Desc>
        <SocialContainer>
          <SocialIcon color="">
            <IconButton size="medium" color="primary" aria-label="upload picture" href="https://www.facebook.com/miguelenrique.sacaaccostupa/">
              <Facebook fontSize="inherit"/>
            </IconButton>
          </SocialIcon>
          <SocialIcon color="">
            <IconButton size="medium" color="secondary" aria-label="upload picture" href="https://www.facebook.com/miguelenrique.sacaaccostupa/">
              <Instagram fontSize="inherit"/>
            </IconButton>
          </SocialIcon>
          <SocialIcon color="">
            <IconButton size="medium" color="primary" aria-label="upload picture" href="https://www.facebook.com/miguelenrique.sacaaccostupa/">
              <Twitter fontSize="inherit"/>
            </IconButton>
          </SocialIcon>
          <SocialIcon color="">
            <IconButton size="medium" color="secondary" aria-label="upload picture" href="https://www.facebook.com/miguelenrique.sacaaccostupa/">
              <Pinterest fontSize="inherit"/>
            </IconButton>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Enlaces útiles :3</Title>
        <List>
          <ListItem onClick={gotoHome}      >Home</ListItem>
          <ListItem onClick={gotoTeddies}   >Peluches</ListItem>
          <ListItem onClick={gotoNecklaces} >Collares</ListItem>
          <ListItem onClick={gotoKeychains} >Llaveros</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contáctame</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Cusco - Cusco - Perú 82001
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +51 982 786 881
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> maryo200116@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;