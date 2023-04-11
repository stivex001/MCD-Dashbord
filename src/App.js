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
import Settings from "./pages/Settings/Setting";
import Edit from "./pages/Settings/Edit";
import Agent from "./pages/Users/Agent";
import Resellers from "./pages/Users/Resellers";
import Server11 from "./pages/Verifications/Server11";
import ReverseConfirm from "./pages/transaction/ReverseConfirm";
import GmBlock from "./pages/Users/GmBlock";
import ModifyAirtime from "./pages/ResellerControl/ModifyAirtime";
import Profiles from "./pages/Users/Profiles";
import SearchUserProfile from "./pages/Users/SearchUserProfile";
import AgentProfile from "./pages/Users/AgentProfile";
import ResellerProfile from "./pages/Users/ResellerProfile";
import Datacontrol from "./pages/ServiceControls/Datacontrol";
import MtnDatacontrol from "./pages/ServiceControls/MtnDataControl";
import GloDatacontrol from "./pages/ServiceControls/GloDataControl";
import MobileDatacontrol from "./pages/ServiceControls/MobileDataControl";
import TvControl from "./pages/ServiceControls/TvControl";
import ElectricityControl from "./pages/ServiceControls/ElectricityControl";
import Daily from "./pages/Reports/Daily";
import Monthly from "./pages/Reports/Montly";
import Yearly from "./pages/Reports/Yearly";
import Datapins from "./pages/ServiceControls/Datapins";
import DatapinsControl from "./pages/ServiceControls/DatapinsControl";

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
        <Route
          path="/findtransaction"
          element={user ? <FindTransaction /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-data"
          element={user ? <AddData /> : <Navigate to="/login" />}
        />
        <Route
          path="/airtime-converter"
          element={user ? <AirtimeConverter /> : <Navigate to="/login" />}
        />
        <Route
          path="/market"
          element={user ? <GeneralMarket /> : <Navigate to="/login" />}
        />
        <Route
          path="/reverse"
          element={user ? <Reversal /> : <Navigate to="/login" />}
        />
        <Route
          path="/reversal-confirm"
          element={user ? <ReverseConfirm /> : <Navigate to="/login" />}
        />
        <Route
          path="/charges"
          element={user ? <PCharges /> : <Navigate to="/login" />}
        />

        {/* Wallet Page */}
        <Route
          path="/addfund"
          element={user ? <Credit /> : <Navigate to="/login" />}
        />
        <Route
          path="/wallet"
          element={user ? <WalletList /> : <Navigate to="/login" />}
        />
        <Route
          path="/withdrawal"
          element={user ? <WithdrawReq /> : <Navigate to="/login" />}
        />

        {/* User Page */}
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate to="/login" />}
        />
        <Route
          path="/find-users"
          element={user ? <FindUser /> : <Navigate to="/login" />}
        />
        <Route
          path="/referral-upgrade"
          element={user ? <ReferalUpgrade /> : <Navigate to="/login" />}
        />
        <Route
          path="/agent-payment"
          element={user ? <AgentPayment /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile-/:id"
          element={user ? <AgentProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiler/:id"
          element={user ? <ResellerProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles/:id"
          element={user ? <SearchUserProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/agents"
          element={user ? <Agent /> : <Navigate to="/login" />}
        />
        <Route
          path="/resellers"
          element={user ? <Resellers /> : <Navigate to="/login" />}
        />
        <Route
          path="/gmBlocked"
          element={user ? <GmBlock /> : <Navigate to="/login" />}
        />

        {/* Verification Page */}
        <Route
          path="/server1"
          element={user ? <Server1 /> : <Navigate to="/login" />}
        />
        <Route
          path="/server1b"
          element={user ? <Server1b /> : <Navigate to="/login" />}
        />
        <Route
          path="/serverdt"
          element={user ? <Server1Data /> : <Navigate to="/login" />}
        />
        <Route
          path="/server2"
          element={user ? <Server2 /> : <Navigate to="/login" />}
        />
        <Route
          path="/server3"
          element={user ? <Server3 /> : <Navigate to="/login" />}
        />
        <Route
          path="/server4"
          element={user ? <Server4 /> : <Navigate to="/login" />}
        />
        <Route
          path="/server5"
          element={user ? <Server5 /> : <Navigate to="/login" />}
        />
        <Route
          path="/server6"
          element={user ? <Server6 /> : <Navigate to="/login" />}
        />
        <Route
          path="/server8"
          element={user ? <Server8 /> : <Navigate to="/login" />}
        />
        <Route
          path="/server10"
          element={user ? <Server10 /> : <Navigate to="/login" />}
        />
        <Route
          path="/server11"
          element={user ? <Server11 /> : <Navigate to="/login" />}
        />

        {/* Payment Page */}
        <Route
          path="/payment"
          element={user ? <Payment /> : <Navigate to="/login" />}
        />

        {/* Settings Page */}
        <Route
          path="/allsettings"
          element={user ? <Settings /> : <Navigate to="/login" />}
        />
        <Route
          path="/allsettings-edit/:userId"
          element={user ? <Edit /> : <Navigate to="/login" />}
        />

        {/* Sercice Controller Page */}
        <Route
          path="/datalist/MTN"
          element={user ? <Mtn /> : <Navigate to="/login" />}
        />
        <Route
          path="/datalist/AIRTEL"
          element={user ? <Airtel /> : <Navigate to="/login" />}
        />
        <Route
          path="/datalist/GLO"
          element={user ? <Glo /> : <Navigate to="/login" />}
        />
        <Route
          path="/datalist/9MOBILE"
          element={user ? <Nmobile /> : <Navigate to="/login" />}
        />
        <Route
          path="/tvcontrol"
          element={user ? <Tv /> : <Navigate to="/login" />}
        />
        <Route
          path="/electricitycontrol"
          element={user ? <Electricity /> : <Navigate to="/login" />}
        />
        <Route
          path="/dataControl/:Id"
          element={user ? <Datacontrol /> : <Navigate to="/login" />}
        />
        <Route
          path="/mtndataControl/:Id"
          element={user ? <MtnDatacontrol /> : <Navigate to="/login" />}
        />

        <Route
          path="/glodataControl/:Id"
          element={user ? <GloDatacontrol /> : <Navigate to="/login" />}
        />

        <Route
          path="/9mobiledataControl/:Id"
          element={user ? <MobileDatacontrol /> : <Navigate to="/login" />}
        />

        <Route
          path="/tvcontrol/:Id"
          element={user ? <TvControl /> : <Navigate to="/login" />}
        />

        <Route
          path="/electricitycontrol/:Id"
          element={user ? <ElectricityControl /> : <Navigate to="/login" />}
        />
        <Route
          path="/datapins"
          element={user ? <Datapins /> : <Navigate to="/login" />}
        />
        <Route
          path="/datapinscontrol/:Id"
          element={user ? <DatapinsControl /> : <Navigate to="/login" />}
        />

        {/* Reseller Page */}
        <Route
          path="/reseller/airtimecontrol"
          element={user ? <AirtimeControl /> : <Navigate to="/login" />}
        />
        <Route
          path="/reseller/datacontrol"
          element={user ? <DataControl /> : <Navigate to="/login" />}
        />
        <Route
          path="/reseller/airtimecontrol/:id"
          element={user ? <ModifyAirtime /> : <Navigate to="/login" />}
        />

        {/* REPORTS Page */}

        <Route
          path="/report_daily"
          element={user ? <Daily /> : <Navigate to="/login" />}
        />
        <Route
          path="/report_monthly"
          element={user ? <Monthly /> : <Navigate to="/login" />}
        />
        <Route
          path="/report_yearly"
          element={user ? <Yearly /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;
