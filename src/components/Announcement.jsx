import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #D5925B;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Ositos con un descuento del 30% hasta el 11 de julio</Container>;
};

export default Announcement;
