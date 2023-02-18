import { Route, Routes } from "react-router-dom";
// import styled from "styled-components";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import FindTransaction from "./pages/transaction/FindTransaction";
import Pending from "./pages/transaction/Pending";
import TransHistory from "./pages/transaction/TransHistory";
import FindUser from "./pages/Users/FindUser";
import ReferalUpgrade from "./pages/Users/ReferalUpgrade";
import Server1 from "./pages/Verifications/Server1";
import Credit from "./pages/Wallet/Credit";

// const Container = styled.div`
//   display: flex;
// `;

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<TransHistory />} />
        <Route path="/transactions-pending" element={<Pending />} />
        <Route path="/findtransaction" element={<FindTransaction />} />
        <Route path="/addfund" element={<Credit />} />
        <Route path="/find-users" element={<FindUser />} />
        <Route path="/referral-upgrade" element={<ReferalUpgrade />} />
        <Route path="/server1" element={<Server1 />} />
      </Routes>
    </div>
  );
};

export default App;
