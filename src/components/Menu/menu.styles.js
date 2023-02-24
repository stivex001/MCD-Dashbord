import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 20px;
  
`;
export const Wrapper = styled.div`
  margin: 30px 0;
`;
export const LinkMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
`;
export const UnListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color:#605daf26;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #98a8b2;
  &:active {
    background-color: rgb(240, 240, 255);
  }

  &:hover {
    color: #706db7;
  }
`;
export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ListContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Heading = styled.span`
  color: #333265;
  font-size: 14px
`;
export const Span = styled.span`
color: #2d3b48;
font-size: 14px;
&:hover {
  color: #605daf;
}
`;
export const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 40px;
`;
