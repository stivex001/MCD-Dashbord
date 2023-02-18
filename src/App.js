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
import Server1b from "./pages/Verifications/Server1b";
import Server1Data from "./pages/Verifications/Server1Data";
import Server2 from "./pages/Verifications/Server2";
import Server3 from "./pages/Verifications/Server3";
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
        <Route path="/server1b" element={<Server1b />} />
        <Route path="/serverdt" element={<Server1Data />} />
        <Route path="/server2" element={<Server2 />} />
        <Route path="/server3" element={<Server3 />} />
      </Routes>
    </div>
  );
};

export default App;
