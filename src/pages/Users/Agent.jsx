import { ArrowDropDown } from "@mui/icons-material";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { getSettings } from "../../Redux/apiCalls";
import { Loading } from "../transaction/pending.styles";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  Action,
  ActionList,
  ActionListCol,
  BtnConatiner,
  Column,
  Container,
  Details,
  DivWrapper,
  Input,
  P,
  SearchAgent,
  SearchDesc,
  TableWrapper,
  Wrapper,
} from "./agent.styles";

const Agent = () => {
  const { settings, isFetching } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  useEffect(() => {
    getSettings(dispatch);
  }, [dispatch]);

  //   if (isFetching) {
  //     return (
  //       <Loading>
  //         <CircularProgress style={{ color: "blue" }} />
  //       </Loading>
  //     );
  //   }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Agents</H3>
          <DescP>
            User / <DescSpan>Agents</DescSpan>
          </DescP>
        </Desc>
        <TableWrapper>
          <P>The list of approved agents.</P>
          <DivWrapper>
            <Action>
              <ActionList>Copy</ActionList>
              <ActionList>Excel</ActionList>
              <ActionList>PDF</ActionList>
              <Column>
                <ActionListCol>Column Visibility</ActionListCol>
                <ArrowDropDown />
              </Column>
            </Action>
            <SearchAgent>
              <SearchDesc>Search: </SearchDesc>
              <Input type="text" />
            </SearchAgent>
          </DivWrapper>
          <Details>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      User Name
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Business Name
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      DOB
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Phone Number
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {settings &&
                    settings.map((row) => (
                      <TableRow
                        key={row.id}
                        style={{ backgroundColor: "#f3f2f7" }}
                      >
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.name}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.value}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.updated_at}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          <BtnConatiner to={`/allsettings-edit/${row.id}`}>
                            Modify
                          </BtnConatiner>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Details>
        </TableWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Agent;
