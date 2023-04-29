import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Photo from "../../assets/mcd_logo.png";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
`;
const UserDeatils = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const UserImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
`;
const P = styled.p`
  color: #8c9ea9;
  font-size: 13px;
  margin-bottom: 24px;
`;
const Span = styled.span`
  color: #33cdff;
`;
const Username = styled.p``;

const TransactionSearch = ({ searchTrans }) => {
  return (
    <Container>
      <Title>Search Result(s)</Title>
      <P>
        Total Result <Span>{searchTrans?.length}</Span>
      </P>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Username
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Description
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Reference
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Initial Wallet
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                New Wallet
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Server
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchTrans &&
              searchTrans.map((row) => (
                <TableRow
                  key={row.id}
                  style={{
                    backgroundColor: row.id % 2 === 0 ? "#ffffff" : "#f3f2f7",
                  }}
                >
                  <TableCell style={{ color: "#8887a9" }}>
                    <UserDeatils>
                      <UserImg src={row.photo || Photo} alt="" />
                      <Username>{row.user_name}</Username>
                    </UserDeatils>
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.status}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.description}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>{row.ref}</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.i_wallet}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.f_wallet}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.server}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>{row.date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TransactionSearch;
