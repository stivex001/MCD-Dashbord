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
import { modifyMtnData } from "../../Redux/apiCalls";
import Server from "./server";

const MtnDatacontrol = () => {
  const { Id } = useParams();
  const id = Number(Id);
  const mtnList = useSelector((state) =>
    state.datalist.mtnList.data?.find((list) => list.id === id)
  );
  const { isFetching, error } = useSelector((state) => state.datalist);

  const [inputNameData, setInputNameData] = useState(mtnList?.name);
  const [inputPrice, setInputPrice] = useState(mtnList?.price);
  const [inputAmount, setInputAmount] = useState(mtnList?.amount);
  const [inputNote, setInputNote] = useState(mtnList?.note);
  const [inputServer, setInputServer] = useState(mtnList?.server);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputNameChange = (event) => {
    setInputNameData(event.target.value);
  };

  const handleInputPriceChange = (event) => {
    setInputPrice(event.target.value);
  };

  const handleInputAmountChange = (event) => {
    setInputAmount(event.target.value);
  };

  const handleInputNoteChange = (event) => {
    setInputNote(event.target.value);
  };

  const handleInputServerChange = (event) => {
    setInputServer(event.target.value);
  };

  const handleUpdateClick = (e) => {
    e.preventDefault();

    modifyMtnData(dispatch, {
      id: mtnList.id,
      name: inputNameData,
      provider_price: inputPrice,
      amount: inputAmount,
      status: 1,
      note: inputNote,
      server: inputServer,
      discount: "0.75",
    });
    if (!error) {
      toast.success(`${inputNameData} has been updated successfully`);
      setTimeout(() => navigate("/datalist/MTN"), 5000);
    } else {
      toast.error("Kindly choose correct plan. Kindly check and try again");
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Modify Data Plan</H3>
          <DescP>
            Data / <DescSpan>Modify Data Plan</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper onSubmit={handleUpdateClick}>
          <Form>
            <InputContainer>
              <InputTitle>Product Name</InputTitle>
              <Input
                type="text"
                onChange={handleInputNameChange}
                value={inputNameData}
              />
            </InputContainer>
            <InputContainer>
              <InputTitle>Provider Price</InputTitle>
              <Input
                type="number"
                onChange={handleInputPriceChange}
                value={inputPrice}
                name="name"
              />
            </InputContainer>
            <InputContainer>
              <InputTitle>Your Price</InputTitle>
              <Input
                type="number"
                onChange={handleInputAmountChange}
                value={inputAmount}
                name="name"
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
            <InputContainer>
              <InputTitle>Note</InputTitle>
              <Input
                type="text"
                onChange={handleInputNoteChange}
                value={inputNote}
                placeholder="Enter Note (Optional)"
              />
            </InputContainer>
          </Form>
          <Btn type="submit">{isFetching ? "Updating" : "Update"}</Btn>
          <ToastContainer />
        </FormWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default MtnDatacontrol;