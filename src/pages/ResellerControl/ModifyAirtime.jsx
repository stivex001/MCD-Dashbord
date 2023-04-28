import { Close } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { modifyAirtimeCon } from "../../Redux/apiCalls";
import { H2, MsgContainer } from "../transaction/pending.styles";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  Option,
  Select,
  Wrapper,
} from "../Wallet/credit.styles";

const ModifyAirtime = () => {
  const location = useLocation();
  const Id = Number(location.pathname.split("/")[3]);
  const airtimeModify = useSelector((state) =>
    state.airtimeConverter.airtimeConList.find((airtime) => airtime.id === Id)
  );
  const { isFetching, error } = useSelector((state) => state.airtimeConverter);

  const [inputNetworkData, setInputNetworkData] = useState(
    airtimeModify.network.toUpperCase()
  );
  const [inputValueData, setInputValueData] = useState(airtimeModify);
  const [inputDiscountData, setInputDiscountData] = useState(
    airtimeModify.discount
  );
  const [inputServerData, setInputServerData] = useState(airtimeModify.server);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputNetworkChange = (event) => {
    setInputNetworkData(event.target.value);
  };

  const handleInputValueChange = (event) => {
    setInputValueData(event.target.value);
  };

  const handleInputDiscountChange = (event) => {
    setInputDiscountData(event.target.value);
  };

  const handleInputServerChange = (event) => {
    setInputServerData(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    modifyAirtimeCon(dispatch, {
      id: airtimeModify.id,
      discount: inputDiscountData,
      server: inputServerData,
    });
    setTimeout(() => navigate("/reseller/airtimecontrol"), 1000);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Desc>
            <H3>Modify Airtime Network</H3>
            <DescP>
              Reseller / <DescSpan>Modify Airtime Network</DescSpan>
            </DescP>
          </Desc>
          <FormWrapper onSubmit={handleFormSubmit}>
            <Form>
              <InputContainer>
                <p
                  style={{ padding: "5px", fontSize: "16px", color: "#495057" }}
                >
                  Network
                </p>
                <Input
                  type="text"
                  onChange={handleInputNetworkChange}
                  value={inputNetworkData}
                  name="name"
                  readOnly
                />
              </InputContainer>

              <InputContainer>
                <p
                  style={{ padding: "5px", fontSize: "16px", color: "#495057" }}
                >
                  Discount
                </p>
                <Input
                  type="text"
                  onChange={handleInputDiscountChange}
                  value={inputDiscountData}
                  name="name"
                />
              </InputContainer>
              <InputContainer>
                <Select
                  name="fundType"
                  id=""
                  value={inputValueData}
                  onChange={handleInputValueChange}
                >
                  <Option value="fund">Deactivate</Option>
                  <Option value="debit">Activate</Option>
                </Select>
              </InputContainer>
              <InputContainer>
                <Select
                  name="server"
                  id=""
                  value={inputServerData}
                  onChange={handleInputServerChange}
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                </Select>
              </InputContainer>
            </Form>
            <Btn type="submit">{isFetching ? "Updating" : "Update"}</Btn>
            {error && (
              <MsgContainer>
                <H2>opps!! something went wrong</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}
          </FormWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default ModifyAirtime;
