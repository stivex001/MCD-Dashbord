import styled from "styled-components";
import WalletTables from "./WalletTables";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
`;
const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
`;

const SamjiWallet = () => {
  return (
    <Container>
      <Title>Wallet Table</Title>
      <WalletTables />
    </Container>
  );
};

export default SamjiWallet;
