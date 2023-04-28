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
import { modifyDatapins } from "../../Redux/apiCalls";
import Server from "./server";

const DatapinsControl = () => {
  const { Id } = useParams();
  const id = Number(Id);

  const datapins = useSelector((state) =>
    Array.isArray(state.datalist.datapins)
      ? state.datalist.datapins?.find((list) => list.id === id)
      : null
  );
  const { isFetching, error } = useSelector((state) => state.datalist);

  const [inputNameData, setInputNameData] = useState(datapins?.name);
  const [inputPrice, setInputPrice] = useState(datapins?.price);
  const [inputServer, setInputServer] = useState(datapins?.server);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputNameChange = (event) => {
    setInputNameData(event.target.value);
  };

  const handleInputPriceChange = (event) => {
    setInputPrice(event.target.value);
  };

  const handleInputServerChange = (event) => {
    setInputServer(event.target.value);
  };

  const handleUpdateClick = (e) => {
    e.preventDefault();

    modifyDatapins(dispatch, {
      id: datapins.id,
      name: inputNameData,
      price: inputPrice,
    });

    if (!error) {
      if (datapins) {
        toast.success(`${inputNameData} has been updated successfully`);
        setTimeout(() => navigate("/datapins"), 5000);
      } else {
        toast.error("DataPins not found. Please try again.");
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
            <H3>Modify Data</H3>
            <DescP>
              Data / <DescSpan>Modify Data</DescSpan>
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
                <InputTitle>Price</InputTitle>
                <Input
                  type="number"
                  onChange={handleInputPriceChange}
                  value={inputPrice}
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
                <Input type="text" placeholder="Enter Note (Optional)" />
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

export default DatapinsControl;
