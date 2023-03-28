import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { NoteAlt } from "@mui/icons-material";
import Photo from "../../assets/mcd_logo.png";
import { Container } from "./users.styles";
import {
  P,
  Span,
  Title,
  UserDeatils,
  UserImg,
  Username,
} from "./userSearch.styles";

const UserSearch = ({ searchUsers }) => {
  return (
    <Container>
      <Title>Search Result(s)</Title>
      <P>
        Total Result <Span>{searchUsers.length}</Span>
      </P>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Username
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Phone NUmber
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Wallet Value
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                User Group
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Reg Date
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchUsers &&
              searchUsers.map((row) => (
                <TableRow key={row.id} style={{ backgroundColor: "#f3f2f7" }}>
                  <TableCell style={{ color: "#8887a9" }}>
                    <UserDeatils>
                      <UserImg src={row.photo || Photo} alt="" />
                      <Username>{row.user_name}</Username>
                    </UserDeatils>
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.email}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.phoneno}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.wallet}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.status}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.req_date}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    <Link to={"/profile/" + row.user_name}>
                      <NoteAlt
                        style={{
                          backgroundColor: "5dd099",
                          color: "white",
                          padding: "4px 8px",
                          fontSize: "40px",
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserSearch;
