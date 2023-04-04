import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
} from "../Settings/edit.styles";
import { MenuItem, TextField } from "@mui/material";

const Datacontrol = () => {
  const { Id } = useParams();
  const id = Number(Id)
  const airtelList = useSelector((state) =>
  state.datalist.airtelList.data?.find((list) => list.id === id)
  );
  // const airtelList = useSelector((state) => state.datalist.airtelList);

  // console.log(typeof(id));

  const [inputNameData, setInputNameData] = useState(airtelList.data?.name);
  const [inputPrice, setInputPrice] = useState(airtelList.data?.price);
  const [inputAmount, setInputAmount] = useState(airtelList.data?.amount);
  const [inputNote, setInputNote] = useState(airtelList.data?.note);
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

  const handleUpdateClick = (e) => {
    e.preventDefault();

    // modifySettings(dispatch, { id: settings.id, value: inputValueData });
    toast.success("Changes made successfully");
    setTimeout(() => navigate("/allsettings"), 1000);
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
              >
                <MenuItem key="1" value="1">
                  1
                </MenuItem>
                <MenuItem key="2" value="2">
                  2
                </MenuItem>
                <MenuItem key="3" value="3">
                  3
                </MenuItem>
                <MenuItem key="4" value="4">
                  4
                </MenuItem>
                <MenuItem key="5" value="5">
                  5
                </MenuItem>
                <MenuItem key="6" value="6">
                  6
                </MenuItem>
                <MenuItem key="7" value="7">
                  7
                </MenuItem>
                <MenuItem key="8" value="8">
                  8
                </MenuItem>
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
          <Btn>Update</Btn>
          <ToastContainer />
        </FormWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Datacontrol;
