import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  InputTitle,
  Wrapper,
} from "../Settings/edit.styles";
import { MenuItem, TextField } from "@mui/material";
import { modifyElectrictyData } from "../../Redux/apiCalls";
import Server from "./server";

const ElectricityControl = () => {
  const { Id } = useParams();
  const id = Number(Id);

  const electricityList = useSelector((state) =>
    Array.isArray(state.datalist.electricityList)
      ? state.datalist.electricityList?.find((list) => list.id === id)
      : null
  );
  const { isFetching, error } = useSelector((state) => state.datalist);

  const [inputNameData, setInputNameData] = useState(electricityList?.name);
  const [inputDiscount, setInputDiscount] = useState(electricityList?.discount);
  const [inputServer, setInputServer] = useState(electricityList?.server);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputNameChange = (event) => {
    setInputNameData(event.target.value);
  };

  const handleInputDiscountChange = (event) => {
    setInputDiscount(event.target.value);
  };

  const handleInputServerChange = (event) => {
    setInputServer(event.target.value);
  };

  const handleUpdateClick = (e) => {
    e.preventDefault();

    modifyElectrictyData(dispatch, {
      id: electricityList.id,
      discount: inputDiscount,
    });

    if (!error) {
      if (electricityList) {
        toast.success(`${inputNameData} has been updated successfully`);
        setTimeout(() => navigate("/electricitycontrol"), 5000);
      } else {
        toast.error("Electricity plan not found. Please try again.");
      }
    } else {
      toast.error("Kindly choose correct plan. Kindly check and try again");
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Desc>
            <H3>Modify TV Plan</H3>
            <DescP>
              TV / <DescSpan>Modify TV Plan</DescSpan>
            </DescP>
          </Desc>
          <FormWrapper onSubmit={handleUpdateClick}>
            <Form>
              <InputContainer>
                <InputTitle>Name</InputTitle>
                <Input
                  type="text"
                  onChange={handleInputNameChange}
                  value={inputNameData}
                  readOnly
                  style={{ backgroundColor: "#e9ecef" }}
                />
              </InputContainer>
              <InputContainer>
                <InputTitle>Discount</InputTitle>
                <Input
                  type="text"
                  onChange={handleInputDiscountChange}
                  value={inputDiscount}
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  select
                  label="Activate"
                  variant="outlined"
                  style={{ width: "100%" }}
                >
                  <MenuItem key="Activate" value="Activate">
                    Activate
                  </MenuItem>
                  <MenuItem key="Deactivate" value="Deactivate">
                    Deactivate
                  </MenuItem>
                </TextField>
              </InputContainer>
              <InputContainer>
                <TextField
                  select
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={handleInputServerChange}
                  value={inputServer}
                >
                  {Server.map((server) => (
                    <MenuItem key={server.id} value={server.value}>
                      {server.value}
                    </MenuItem>
                  ))}
                </TextField>
              </InputContainer>
            </Form>
            <Btn type="submit">{isFetching ? "Updating" : "Update"}</Btn>
            <ToastContainer />
          </FormWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default ElectricityControl;
