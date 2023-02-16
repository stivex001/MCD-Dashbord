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
const Span = styled.span`
padding: 2.6px 4.2px;
border-radius: 2px;
color: #fff;
font-size: 12px;
font-weight: bold;
`;

const Tables = () => {
  return (
    <Container>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor: '#f3f2f7'}}>
            <TableCell style={{color: '#8281cc'}}>id</TableCell>
            <TableCell style={{color: '#8281cc'}}>Username</TableCell>
            <TableCell style={{color: '#8281cc'}}>Amount</TableCell>
            <TableCell style={{color: '#8281cc'}}>Description</TableCell>
            <TableCell style={{color: '#8281cc'}}>Status</TableCell>
            <TableCell style={{color: '#8281cc'}}>I.Wallet</TableCell>
            <TableCell style={{color: '#8281cc'}}>F.Wallet</TableCell>
            <TableCell style={{color: '#8281cc'}}>I.P </TableCell>
            <TableCell style={{color: '#8281cc'}}>Server</TableCell>
            <TableCell style={{color: '#8281cc'}}>Ref</TableCell>
            <TableCell style={{color: '#8281cc'}}>Date</TableCell>
            <TableCell style={{color: '#8281cc'}}>Note</TableCell>
            <TableCell style={{color: '#8281cc'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              style={{backgroundColor: '#f3f2f7'}}
            >
              <TableCell style={{color: '#8887a9'}}>
                {row.id}
              </TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.username}</TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.amount}</TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.desc}</TableCell>
              <TableCell style={{color: '#8887a9'}}>
                <Span style={{backgroundColor: `${row.status === 'successful' ? '#33cdff' : '#5dd099'}`}}>{row.status}</Span>
              </TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.iwallet}</TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.fwallet}</TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.ip}</TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.server}</TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.ref}</TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.date}</TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.note}</TableCell>
              <TableCell style={{color: '#8887a9'}}>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Container>
  )
}

export default Tables