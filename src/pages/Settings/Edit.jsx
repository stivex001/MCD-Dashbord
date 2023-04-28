import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { modifySettings } from "../../Redux/apiCalls";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  InputTitle,
  Wrapper,
} from "./edit.styles";

const Edit = () => {
  const location = useLocation();
  const settingsId = Number(location.pathname.split("/")[2]);
  const settings = useSelector((state) =>
    state.settings.settings.find((setting) => setting.id === settingsId)
  );

  const [inputNameData, setInputNameData] = useState(settings.name);
  const [inputValueData, setInputValueData] = useState(settings.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputNameChange = (event) => {
    setInputNameData(event.target.value);
  };

  const handleInputValueChange = (event) => {
    setInputValueData(event.target.value);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    if (inputValueData === settings.value) {
      toast.error("You did not make any changes");
    } else {
      modifySettings(dispatch, { id: settings.id, value: inputValueData });
      toast.success("Changes made successfully");

      setTimeout(() => navigate("/allsettings"), 1000);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Desc>
            <H3>Modify Setting</H3>
            <DescP>
              Settings / <DescSpan>Modify Setting</DescSpan>
            </DescP>
          </Desc>
          <FormWrapper onSubmit={handleEditClick}>
            <Form>
              <InputContainer>
                <InputTitle>Name</InputTitle>
                <Input
                  type="email"
                  onChange={handleInputNameChange}
                  value={inputNameData}
                  name="name"
                  readOnly
                />
              </InputContainer>
              <InputContainer>
                <InputTitle>Value</InputTitle>
                <Input
                  type="text"
                  onChange={handleInputValueChange}
                  value={inputValueData}
                  name="name"
                />
              </InputContainer>
            </Form>
            <Btn onClick={handleEditClick}>Update</Btn>
            <ToastContainer />
          </FormWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Edit;
