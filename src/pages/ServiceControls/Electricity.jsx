import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { getElectricityList } from "../../Redux/apiCalls";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { P } from "./airtel.styles";
import {
  Container,
  Details,
  Span,
  TableWrapper,
  Wrapper,
} from "../transaction/general.styles";
import { Loading } from "../transaction/pending.styles";
import { BtnConatiner } from "../ResellerControl/airtimeControl.styles";

const Electricity = () => {
  const { electricityList, isFetching } = useSelector(
    (state) => state.datalist
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getElectricityList(dispatch);
  }, [dispatch]);

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
            <H3>Electricity Control</H3>
            <DescP>
              Services / <DescSpan>Electricity Control</DescSpan>
            </DescP>
          </Desc>
          <TableWrapper>
            <P>Network List</P>
            <Details>
              <TableContainer
                component={Paper}
                sx={{ border: "1px solid #e0e0e0" }}
              >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        id
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Company
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Discount
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Server
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Status
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Date Modified
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  {Array.isArray(electricityList) &&
                    electricityList.map((row) => (
                      <TableBody key={row.id}>
                        <TableRow
                          style={{
                            backgroundColor:
                              row.id % 2 === 0 ? "#ffffff" : "#f3f2f7",
                          }}
                        >
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.id}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.name}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.discount}
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
                            <BtnConatiner to={`/electricitycontrol/${row.id}`}>
                              Modify
                            </BtnConatiner>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ))}
                </Table>
              </TableContainer>
            </Details>
          </TableWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Electricity;
