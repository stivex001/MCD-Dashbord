import { Route, Routes } from "react-router-dom";
// import styled from "styled-components";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Payment from "./pages/Payment/Payment";
import Airtel from "./pages/ServiceControls/Airtel";
import Mtn from "./pages/ServiceControls/Mtn";
import Glo from "./pages/ServiceControls/Glo";
import FindTransaction from "./pages/transaction/FindTransaction";
import Pending from "./pages/transaction/Pending";
import TransHistory from "./pages/transaction/TransHistory";
import FindUser from "./pages/Users/FindUser";
import ReferalUpgrade from "./pages/Users/ReferalUpgrade";
import Server1 from "./pages/Verifications/Server1";
import Server10 from "./pages/Verifications/Server10";
import Server1b from "./pages/Verifications/Server1b";
import Server1Data from "./pages/Verifications/Server1Data";
import Server2 from "./pages/Verifications/Server2";
import Server3 from "./pages/Verifications/Server3";
import Server4 from "./pages/Verifications/Server4";
import Server5 from "./pages/Verifications/Server5";
import Server6 from "./pages/Verifications/Server6";
import Server8 from "./pages/Verifications/Server8";
import Credit from "./pages/Wallet/Credit";
import Nmobile from "./pages/ServiceControls/Nmobile";
import Tv from "./pages/ServiceControls/Tv";
import Electricity from "./pages/ServiceControls/Electricity";

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
        <Route path="/server4" element={<Server4 />} />
        <Route path="/server5" element={<Server5 />} />
        <Route path="/server6" element={<Server6 />} />
        <Route path="/server8" element={<Server8 />} />
        <Route path="/server10" element={<Server10 />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/mtn" element={<Mtn />} />
        <Route path="/airtel" element={<Airtel />} />
        <Route path="/glo" element={<Glo />} />
        <Route path="/9mobile" element={<Nmobile />} />
        <Route path="/tvcontrol" element={<Tv />} />
        <Route path="/electricitycontrol" element={<Electricity />} />
      </Routes>
    </div>
  );
};

export default App;
