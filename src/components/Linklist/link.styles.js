import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  &:hover {
    background-color:#605daf26;
  }
`;
export const ListContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Span = styled.span`
  color: #33404d;
`;
export const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 40px;
`;
export const UnListItem = styled.li`
display: flex;
align-items: center;
gap: 10px;
padding: 5px;
cursor: pointer;
border-radius: 10px;
font-size: 15px;
font-weight: 500;
color: #98a8b2;
&:hover {
  background-color:#605daf26;
}
`;
