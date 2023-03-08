import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(prop) =>
    prop.type === "Re-process Selected"
      ? "#605daf"
      : prop.type === "Re-process"
      ? "#605daf"
      : prop.type === "Mark Delivered Selected"
      ? "#5dd099"
      : prop.type === "Mark Delivered"
      ? "#5dd099"
      : "#f96e5b"};
  padding: 12px;
  cursor: pointer;
  border-radius: 5px;
`;
const UiButton = styled.button`
  font-size: 14px;
  border: none;
  background: none;
  color: #fff;
`;

const Button = ({ title, checkId }) => {

  const handleSelect = async () => {
    if (title === 'Re-process Selected') {
      try {
        const BASE_URL = "https://adminapi.mcd.5starcompany.com.ng/api/v1";
        const res = await axios.post(`${BASE_URL}/transactions/resubmit-multiple`)
      } catch (error) {
        
      }
      console.log(checkId);
      
    }
    
    if (title === 'Mark Delivered Selected') {
      console.log('Mark Delivered Selected');
    }
    if (title === 'Reverse Transaction Selected') {
      console.log('Reverse Transaction Selected');
    }
  }

  return (
    <Container type={title}>
      <UiButton type="submit" onClick={handleSelect}>{title}</UiButton>
    </Container>
  );
};

export default Button;
