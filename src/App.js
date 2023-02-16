import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

// const Container = styled.div`
//   display: flex;
// `;

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
