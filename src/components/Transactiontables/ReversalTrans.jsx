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

const ReversalTrans = () => {
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
            <TableCellB>1</TableCellB>
            <TableCellB>
              odexcheapdata fund wallet using bank transfer to GTBank
            </TableCellB>
            <TableCellB>#1000</TableCellB>
            <TableCellB>odexcheapdata</TableCellB>
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
            <TableCellB>1</TableCellB>
            <TableCellB>
              odexcheapdata fund wallet using bank transfer to GTBank
            </TableCellB>
            <TableCellB>#1000</TableCellB>
            <TableCellB>odexcheapdata</TableCellB>
          </TableBodys>
        </TableContain>
      </Right>
    </Container>
  );
};

export default ReversalTrans;
