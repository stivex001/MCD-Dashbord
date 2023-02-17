import { Route, Routes } from "react-router-dom";
// import styled from "styled-components";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import FindTransaction from "./pages/transaction/FindTransaction";
import Pending from "./pages/transaction/Pending";
import TransHistory from "./pages/transaction/TransHistory";

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
      </Routes>
    </div>
  );
};

export default App;
