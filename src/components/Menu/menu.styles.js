import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  height: calc(100vh - 100px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: white;
    border-radius: 40px;
  }
  ::-webkit-scrollbar-thumb {
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #e7e7f3;
  }
  
`;
export const Wrapper = styled.div`
  margin: 20px 0;
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
  gap: 20px;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #98a8b2;
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
  // margin-bottom: 20px ;
  color: #555;
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
