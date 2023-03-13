import { NearMe } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px 0;
  display: flex;
  gap: 30px;
`;
const Left = styled.div`
flex: 1;
background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
`;
const Textarea = styled.textarea`
padding: 6px 12px;
outline-color: #333265;
`;
const Btn = styled.button`
display: flex;
align-items: center;
margin: 5px 0 20px;
padding: 6px 12px;
color: #fff;
background-color: #5b63ae;
cursor: pointer;
border: none;
border-radius: 2px;
&:hover {
  color: black;
  transition: all 0.5s;
}
`;
const Right = styled.div`
flex:3;
background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
`;

const Nofication = () => {
  return (
    <Container>
      <Left>
        <Textarea placeholder="Message" />
        <Btn>
          <NearMe />
          Send Message
        </Btn>
      </Left>
      <Right>
        
      </Right>
    </Container>
  )
}

export default Nofication