import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;
export const SidebarLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
export const SidebarLabel = styled.span`
  margin-left: 16px;
  color: #2d3b48;
  font-size: 14px;

  &:hover {
    color: #605daf;
  }
`;
export const DropdownLink = styled(NavLink)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
`;
export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
`;