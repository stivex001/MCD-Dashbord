import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/home/Home";

// const Container = styled.div`
//   display: flex;
// `;

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
