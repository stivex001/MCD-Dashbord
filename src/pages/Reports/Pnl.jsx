import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { Container, Wrapper } from "../transaction/general.styles";
import { EventAvailable, Search } from "@mui/icons-material";

import {
  Btn,
  Input,
  InputWrapper,
  Left,
  ReportWrapper,
  Right,
  Title,
} from "./daily.styles";
import useInput from "../../Hooks/use-form";
import { useDispatch, useSelector } from "react-redux";
import { getPnlList } from "../../Redux/apiCalls";
import { useState } from "react";
import PnlTables from "../../components/PNL table/PnlTables";

const Pnl = () => {
  const report = false;
  const dispatch = useDispatch();
  const { pnl, isFetching, error } = useSelector((state) => state.report);
  const [currentMonthYear, setCurrentMonthYear] = useState(() => {
    const currentDate = new Date();
    return `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}`;
  });

  const { value: enteredDate, valueChangeHandler: dateInputChange } =
    useInput();

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${month}, ${year}`;
  };

  const formatCurrentMonthYear = () => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    return `${month}, ${year}`;
  };

  const handleSearch = (e) => {
    e.preventDefault();

    getPnlList(dispatch, enteredDate);
  };
  console.log(pnl.data.incomed);
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Profit And Loss</H3>
          <DescP>
            Reports / <DescSpan>Profit And Loss</DescSpan>
          </DescP>
        </Desc>
        <ReportWrapper>
          <Left onSubmit={handleSearch}>
            <Title>Search</Title>
            <InputWrapper>
              <EventAvailable
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="month"
                onChange={(e) => {
                  setCurrentMonthYear(e.target.value);
                  dateInputChange(e);
                }}
                value={enteredDate || currentMonthYear}
              />
            </InputWrapper>
            <Btn type="submit">
              <Search />
              Search
            </Btn>
          </Left>
          <Right>
            {enteredDate ? (
              <Title>
                Profit & Loss Report for {formatDateString(enteredDate)}{" "}
              </Title>
            ) : (
              <Title>Profit & Loss Report for {formatCurrentMonthYear()}</Title>
            )}

            <PnlTables report={pnl} />
          </Right>
        </ReportWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Pnl;
