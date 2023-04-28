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
import { modifyTvData } from "../../Redux/apiCalls";
import Server from "./server";

const TvControl = () => {
  const { Id } = useParams();
  const id = Number(Id);
  const tvList = useSelector((state) =>
    state.datalist.tvList.data?.find((list) => list.id === id)
  );
  const { isFetching, error } = useSelector((state) => state.datalist);

  const [inputNameData, setInputNameData] = useState(tvList?.name);
  const [inputPrice, setInputPrice] = useState(tvList?.price);
  const [inputDiscount, setInputDiscount] = useState(tvList?.discount);
  const [inputType, setInputType] = useState(tvList?.type);
  const [inputServer, setInputServer] = useState(tvList?.server);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputNameChange = (event) => {
    setInputNameData(event.target.value);
  };

  const handleInputPriceChange = (event) => {
    setInputPrice(event.target.value);
  };

  const handleInputTypeChange = (event) => {
    setInputType(event.target.value);
  };

  const handleInputDiscountChange = (event) => {
    setInputDiscount(event.target.value);
  };

  const handleInputServerChange = (event) => {
    setInputServer(event.target.value);
  };

  const handleUpdateClick = (e) => {
    e.preventDefault();

    modifyTvData(dispatch, {
      id: tvList.id,
      name: inputNameData,
      price: inputPrice,
      discount: inputDiscount,
    });
    if (!error) {
      toast.success(`${inputNameData} has been updated successfully`);
      setTimeout(() => navigate("/tvcontrol"), 5000);
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
                <InputTitle>Type</InputTitle>
                <Input
                  type="text"
                  onChange={handleInputTypeChange}
                  value={inputType}
                  readOnly
                  style={{ backgroundColor: "#e9ecef" }}
                />
              </InputContainer>
              <InputContainer>
                <InputTitle>Name</InputTitle>
                <Input
                  type="text"
                  onChange={handleInputNameChange}
                  value={inputNameData}
                  name="name"
                />
              </InputContainer>
              <InputContainer>
                <InputTitle>Price</InputTitle>
                <Input
                  type="number"
                  onChange={handleInputPriceChange}
                  value={inputPrice}
                  name="name"
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
                  label="1"
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

export default TvControl;
