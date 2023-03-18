import { NearMe } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../responsive";
import NotificationHistory from "./NotificationHistory";

const Container = styled.div`
  margin: 50px 0;
  display: flex;
  gap: 30px;
  ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
flex: 1;
background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  height: 50%;
  width: 100%;
`;
const Textarea = styled.textarea`
padding: 6px 12px;
outline-color: #333265;
${mobile({ width: "100%" })};
`;
const Btn = styled.button`
display: flex;
align-items: center;
margin: 5px 0 20px;
padding: 6px 12px;
color: #fff;
background: linear-gradient(to right, #5c62ae, #4088a9);
cursor: pointer;
border: none;
border-radius: 2px;
&:hover {
  color: #343a40;
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
const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
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
      <Title>Push Notification History</Title>
      <NotificationHistory />
      </Right>
    </Container>
  )
}

export default Nofication