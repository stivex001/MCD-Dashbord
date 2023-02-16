import styled from "styled-components";
import { rows } from "./tableData";
import { DataGrid } from "@mui/x-data-grid";
import { NoteAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Span = styled.span`
  padding: 2.6px 4.2px;
  border-radius: 2px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

const Tables = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "Username", width: 100 },
    { field: "amount", headerName: "Amount", type: "number", width: 70 },
    {
      field: "desc",
      headerName: "Description",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <Span
            style={{
              backgroundColor: `${
                params.row.status === "successful" ? "#33cdff" : "#5dd099"
              }`,
            }}
          >
            {params.row.status}
          </Span>
        );
      },
    },
    {
      field: "iwallet",
      headerName: "I.Wallet",
      width: 100,
    },
    {
      field: "fwallet",
      headerName: "F.Wallet",
      width: 100,
    },
    {
      field: "ip",
      headerName: "I.P",
      width: 130,
    },
    {
      field: "server",
      headerName: "Server",
      width: 70,
    },
    {
      field: "ref",
      headerName: "Ref",
      width: 200,
    },
    {
      field: "date",
      headerName: "Date",
      width: 130,
    },
    {
      field: "note",
      headerName: "Note",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <NoteAlt
                style={{
                  backgroundColor: "5dd099",
                  color: "white",
                  padding: "4px 8px",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </Container>
  );
};

export default Tables;
