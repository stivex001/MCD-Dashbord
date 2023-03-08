import { Route, Routes, Navigate } from "react-router-dom";
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
import AirtimeControl from "./pages/ResellerControl/AirtimeControl";
import DataControl from "./pages/ResellerControl/DataControl";
import GeneralMarket from "./pages/transaction/GeneralMarket";
import AddData from "./pages/transaction/AddData";
import AirtimeConverter from "./pages/transaction/AirtimeConverter";
import Reversal from "./pages/transaction/Reversal";
import PCharges from "./pages/transaction/PCharges";
import WalletList from "./pages/Wallet/WalletList";
import WithdrawReq from "./pages/Wallet/WithdrawReq";
import AgentPayment from "./pages/Users/AgentPayment";
import { useSelector } from "react-redux";
import Users from "./pages/Users/Users";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={user ? <Home /> : <Login />} />

        {/* Transaction Page */}
        <Route
          path="/history"
          element={user ? <TransHistory /> : <Navigate to="/login" />}
        />
        <Route
          path="/transactions-pending"
          element={user ? <Pending /> : <Navigate to="/login" />}
        />
        <Route path="/findtransaction" element={<FindTransaction />} />
        <Route path="/add-data" element={<AddData />} />
        <Route path="/airtime-converter" element={<AirtimeConverter />} />
        <Route path="/market" element={<GeneralMarket />} />
        <Route path="/reverse-transaction" element={<Reversal />} />
        <Route path="/charges" element={<PCharges />} />

        {/* Wallet Page */}
        <Route path="/addfund" element={<Credit />} />
        <Route path="/wallet" element={<WalletList />} />
        <Route path="/withdrawal" element={<WithdrawReq />} />

        {/* User Page */}
        <Route path="/users" element={<Users />} />
        <Route path="/find-users" element={<FindUser />} />
        <Route path="/referral-upgrade" element={<ReferalUpgrade />} />
        <Route path="/agent-payment" element={<AgentPayment />} />

        {/* Verification Page */}
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

        {/* Payment Page */}
        <Route path="/payment" element={<Payment />} />

        {/* Sercice Controller Page */}
        <Route path="/mtn" element={<Mtn />} />
        <Route path="/airtel" element={<Airtel />} />
        <Route path="/glo" element={<Glo />} />
        <Route path="/9mobile" element={<Nmobile />} />
        <Route path="/tvcontrol" element={<Tv />} />
        <Route path="/electricitycontrol" element={<Electricity />} />

        {/* Reseller Page */}
        <Route path="/airtime-control" element={<AirtimeControl />} />
        <Route path="/data-control" element={<DataControl />} />
      </Routes>
    </div>
  );
};

export default App;
