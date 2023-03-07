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

const Button = ({ title, pendingTrans, setPendingTrans }) => {

  const handleSelect = () => {
    if (title === 'Re-process Selected') {
      let checkedInputValue = [];
      for(let i=0; i < pendingTrans.length; i++) {
        if (pendingTrans[i].isChecked===true) {
          checkedInputValue.push(pendingTrans[i].id)
        }
      }
      console.log(JSON.stringify(checkedInputValue));
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
      <UiButton onClick={handleSelect}>{title}</UiButton>
    </Container>
  );
};

export default Button;
