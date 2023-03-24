import {
  Container,
  Left,
  Right,
  TableBodys,
  TableCellB,
  TableCells,
  TableContain,
  TableHeads,
  TableRows,
  Title,
} from "./reversal.styles";

const ReversalTrans = ({ searchReversal }) => {
  const row = searchReversal;
  return (
    <Container>
      <Left>
        <Title>Transaction</Title>
        <TableContain>
          <TableHeads>
            <TableRows style={{ fontWeight: "bold" }}>
              <TableCells>#</TableCells>
              <TableCells>Description</TableCells>
              <TableCells>Amount</TableCells>
              <TableCells>Username</TableCells>
            </TableRows>
          </TableHeads>
          <TableBodys>
            <TableRows>
              <TableCellB>{row.id}</TableCellB>
              <TableCellB>{row.description}</TableCellB>
              <TableCellB>{row.amount}</TableCellB>
              <TableCellB>{row.user_name}</TableCellB>
            </TableRows>
          </TableBodys>
        </TableContain>
      </Left>
      <Right>
        <Title>Reversal</Title>
        <TableContain>
          <TableHeads>
            <TableRows style={{ fontWeight: "bold" }}>
              <TableCells>#</TableCells>
              <TableCells>Description</TableCells>
              <TableCells>Amount</TableCells>
              <TableCells>Username</TableCells>
            </TableRows>
          </TableHeads>
          <TableBodys>
            <TableRows>
            <TableCellB>{row.id}</TableCellB>
              <TableCellB>Being reversal of {row.description}</TableCellB>
              <TableCellB>{row.amount}</TableCellB>
              <TableCellB>{row.user_name}</TableCellB>
            </TableRows>
          </TableBodys>
        </TableContain>
      </Right>
    </Container>
  );
};

export default ReversalTrans;
