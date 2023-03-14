import {
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
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { getSettings } from "../../Redux/apiCalls";
import { laptop } from "../../responsive";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div`
  margin: 70px 0;
  ${laptop({ marginLeft: "250px" })};
`;
const Wrapper = styled.div`
  padding: 20px;
  height: 74vh;
`;
const TableWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
const P = styled.p`
  font-size: 13px;
  color: #8c9ea9;
`;
const Details = styled.div`
  margin: 30px 0;
`;
const BtnConatiner = styled(Link)`
  background-color: #aaaece;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
`;

const Settings = () => {
  const settings = useSelector((state) => state.settings.settings);
  const dispatch = useDispatch();

  useEffect(() => {
    getSettings(dispatch);
  }, [dispatch]);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Settings Control</H3>
          <DescP>
            Settings / <DescSpan>Settings Control</DescSpan>
          </DescP>
        </Desc>
        <TableWrapper>
          <P>Settings List</P>
          <Details>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Name
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Value
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
                  {settings.map((row) => (
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

export default Settings;
