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
import { getAirtimeConList } from "../../Redux/apiCalls";
import { Loading } from "../transaction/pending.styles";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { H2, MsgContainer } from "../transaction/pending.styles";
import { Close } from "@mui/icons-material";
import {
  BtnConatiner,
  Container,
  Details,
  P,
  Span,
  TableWrapper,
  Wrapper,
} from "./airtimeControl.styles";

const AirtimeControl = () => {
  const { airtimeConList, isFetching, message } = useSelector(
    (state) => state.airtimeConverter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getAirtimeConList(dispatch);
  }, [dispatch]);

  if (isFetching) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Reseller Airtime Control</H3>
          <DescP>
            Services / <DescSpan>Reseller Airtime Control</DescSpan>
          </DescP>
        </Desc>
        <TableWrapper>
          {message && (
            <MsgContainer type="success">
              <H2 type="success">{`Network has been updated successfully!`}</H2>
              <Close style={{ color: "#806e6b", cursor: "pointer" }} />
            </MsgContainer>
          )}
          <P>Network List</P>
          <Details>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      id
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Network
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Discount
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Server
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Status
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Date Modified
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {airtimeConList && airtimeConList.length === 0 ? (
                    <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                      <TableCell
                        colSpan={7}
                        style={{ textAlign: "center", color: "#8887a9" }}
                      >
                        No data in the table
                      </TableCell>
                    </TableRow>
                  ) : (
                    airtimeConList &&
                    airtimeConList.map((row) => (
                      <TableRow
                        key={row.id}
                        style={{
                          backgroundColor:
                            row.id % 2 === 0 ? "#ffffff" : "#f3f2f7",
                        }}
                      >
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.id}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.network.toUpperCase()}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.discount}%
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.server}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          <Span
                            style={{
                              backgroundColor: `${
                                row.status === 1 ? "#5dd099" : "#f8c955"
                              }`,
                            }}
                          >
                            {row.status === 1 ? "Active" : "Inactive"}
                          </Span>
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.updated_at}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          <BtnConatiner
                            to={`/reseller/airtimecontrol/${row.id}`}
                          >
                            Modify
                          </BtnConatiner>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
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

export default AirtimeControl;
