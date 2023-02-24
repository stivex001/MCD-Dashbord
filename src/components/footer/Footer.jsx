import styled from "styled-components";

const Container = styled.footer`
  background-color: #605daf05;
  padding: 20px 30px;
  text-align: center;
`;
const Wrapper = styled.span`
  color: #2d3b48;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>&copy; 2020 Mega Cheap Data <b>by</b>  5Star Inn Company.</Wrapper>
    </Container>
  );
};

export default Footer;
