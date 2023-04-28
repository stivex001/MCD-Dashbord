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
import {
  getPnlExpensesList,
  getPnlGlExpensesList,
  getPnlGlList,
  getPnlList,
} from "../../Redux/apiCalls";
import { useEffect, useState } from "react";
import PnlTables from "../../components/PNL table/PnlTables";
import { Loading } from "../transaction/pending.styles";
import { CircularProgress } from "@mui/material";

const Pnl = () => {
  const dispatch = useDispatch();
  const { pnl, isFetching, pnlExpenses, pnlGl, pnlGlExpenses } = useSelector(
    (state) => state.report
  );
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

  const data = pnl.data?.income_gls.map(({ gl }) => gl);
  const glSums = pnlGl?.map((item) => item.data.gl_sum);

  const expensesData = pnlExpenses.data?.expense_gls.map(({ gl }) => gl);
  const expensesGlSums = pnlGlExpenses?.map((item) => item.data.gl_sum);

  const combinedData = data?.map((gl, index) => {
    return {
      gl: gl,
      gl_sum: glSums[index],
    };
  });

  const expensesCombinedData = expensesData?.map((gl, index) => {
    return {
      gl: gl,
      gl_sum: expensesGlSums[index],
    };
  });

  useEffect(() => {
    getPnlList(dispatch, currentMonthYear);
  }, [dispatch, currentMonthYear]);

  useEffect(() => {
    getPnlExpensesList(dispatch, currentMonthYear);
  }, [dispatch, currentMonthYear]);

  useEffect(() => {
    getPnlGlList(dispatch, currentMonthYear);
  }, [dispatch, currentMonthYear]);

  useEffect(() => {
    getPnlGlExpensesList(dispatch, currentMonthYear);
  }, [dispatch, currentMonthYear]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (currentMonthYear) {
      getPnlList(dispatch, currentMonthYear);
      getPnlExpensesList(dispatch, currentMonthYear);
      getPnlGlList(dispatch, currentMonthYear);
      getPnlGlExpensesList(dispatch, currentMonthYear);
    }

    getPnlList(dispatch, enteredDate);
    getPnlExpensesList(dispatch, enteredDate);
    getPnlGlList(dispatch, enteredDate);
    getPnlGlExpensesList(dispatch, enteredDate);
  };

  if (isFetching) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
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
                {isFetching ? "Searching..." : "Search"}
              </Btn>
            </Left>
            <Right>
              {enteredDate ? (
                <Title>
                  Profit & Loss Report for {formatDateString(enteredDate)}{" "}
                </Title>
              ) : (
                <Title>
                  Profit & Loss Report for {formatCurrentMonthYear()}
                </Title>
              )}

              <PnlTables
                report={pnl}
                pnlExpenses={pnlExpenses}
                pnlGl={pnlGl}
                combinedData={combinedData}
                expensesCombinedData={expensesCombinedData}
              />
            </Right>
          </ReportWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Pnl;
