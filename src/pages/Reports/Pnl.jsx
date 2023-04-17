import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { Container, Wrapper } from "../transaction/general.styles";
import { EventAvailable, Search } from "@mui/icons-material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
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

const Pnl = () => {
  const report = false;
  const dispatch = useDispatch()
  const {pnl, isFetching, error} = useSelector(state => state.report)
  const { value: enteredDate, valueChangeHandler: dateInputChange } =
    useInput();

  const handleSearch = (e) => {
    e.preventDefault();

    getPnlList(dispatch, enteredDate)
  };
console.log(pnl.data);
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
              <Input type="month" onChange={dateInputChange}
                value={enteredDate} />
            </InputWrapper>
            <Btn type="submit">
              <Search />
              Search
            </Btn>
          </Left>
          <Right>
            <Title>Profit & Loss Report for April, 2023</Title>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Name
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Sum
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Count
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {report &&
                    report.map((row) => (
                      <TableRow
                        key={row.id}
                        style={{ backgroundColor: "#f3f2f7" }}
                      >
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.name}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.sum}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.count}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Right>
        </ReportWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Pnl;
