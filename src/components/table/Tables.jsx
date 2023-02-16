import styled from "styled-components"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { rows } from "./tableData";

const Container = styled.div``

const Tables = () => {
  return (
    <Container>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>I.Wallet</TableCell>
            <TableCell>F.Wallet</TableCell>
            <TableCell>I.P </TableCell>
            <TableCell>Server</TableCell>
            <TableCell>Ref</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Note</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.desc}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.iwallet}</TableCell>
              <TableCell>{row.fwallet}</TableCell>
              <TableCell>{row.ip}</TableCell>
              <TableCell>{row.server}</TableCell>
              <TableCell>{row.ref}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.note}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Container>
  )
}

export default Tables