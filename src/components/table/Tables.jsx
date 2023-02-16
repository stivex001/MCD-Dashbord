import styled from "styled-components"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { rows } from "./tableData";
import { DataGrid } from "@mui/x-data-grid";
import { Bookmark, NoteAlt } from "@mui/icons-material";

const Container = styled.div``
const Span = styled.span`
padding: 2.6px 4.2px;
border-radius: 2px;
color: #fff;
font-size: 12px;
font-weight: bold;
`;

const Tables = () => {

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Username', width: 100 },
  { field: 'amount', headerName: 'Amount', type: 'number', width: 70 },
  {
    field: 'desc',
    headerName: 'Description',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
  },
  {
    field: 'iwallet',
    headerName: 'I.Wallet',
    width: 100,
  },
  {
    field: 'fwallet',
    headerName: 'F.Wallet',
    width: 100,
  },
  {
    field: 'ip',
    headerName: 'I.P',
    width: 130,
  },
  {
    field: 'server',
    headerName: 'Server',
    width: 70,
  },
  {
    field: 'ref',
    headerName: 'Ref',
    width: 200,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 130,
  },
  {
    field: 'note',
    headerName: 'Note',
    width: 100,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 130,
    renderCell: () => {
      return(
        <>
        <NoteAlt style={{backgroundColor: '5dd099' ,color: 'white', padding: '4px 8px', fontSize: '30px', cursor: 'pointer'}} />
        </>
      )
    }
  },
  // {
  //   field: 'status',
  //   headerName: 'Status',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

  return (
    <Container>
           <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

    </Container>
  )
}

export default Tables


{/* <Container>
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

    </Container> */}