import {
  AccountBalanceWallet,
  EventNote,
  Group,
  MailOutline,
  PermIdentity,
  Search,
  SimCardDownload,
} from "@mui/icons-material";
import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { laptop, mobile } from "../../responsive";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div`
margin: 70px 0;
${laptop({ marginLeft: "250px" })};
`;
const Wrapper = styled.div`
  padding: 20px;
  height: 74vh;
`;
const FormWrapper = styled.form`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 16px;
  ${mobile({ gridTemplateColumns: "auto" })};
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9ecef;
  width: 100%;
  border-radius: 1px;
`;
const Input = styled.input`
  padding: 12px;
  width: 100%;
  outline-color: #d4d8e1;
  border: 1px solid #d4d8e1;
`;
const Btn = styled.button`
display: flex;
align-items: center;
background: linear-gradient(to right, #5c62ae, #4088a9);
padding: 10px;
margin: 20px 0;
gap: 2px;
color: white;
cursor: pointer;
border-radius: 5px;
border: none;
font-weigth: 700;
font-size: 14px;
&:hover {
  color: #343a40;
  transition: all 0.5s;
}
`;

const FindUser = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Search User</H3>
          <DescP>
            Users / <DescSpan>Search User</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper>
          <Form>
            <InputContainer>
              <PermIdentity
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input type="text" placeholder="Search for username" />
            </InputContainer>
            <InputContainer>
              <SimCardDownload
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input type="number" placeholder="Search for phone number" />
            </InputContainer>
            <InputContainer>
              <Group
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="text"
                placeholder="Search User group e.g agent, client, reseller"
              />
            </InputContainer>
            <InputContainer>
              <AccountBalanceWallet
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input type="text" placeholder="Search for wallet value" />
            </InputContainer>
            <InputContainer>
              <MailOutline
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input type="text" placeholder="Search for email address" />
            </InputContainer>
            <InputContainer>
              <EventNote
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input type="date" />
            </InputContainer>
          </Form>
          <Btn type="submit">
            <Search />
            Search
          </Btn>
        </FormWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default FindUser;
