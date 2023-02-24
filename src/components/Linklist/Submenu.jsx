import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const SidebarLink = styled(Link)`
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
const SidebarLabel = styled.span`
  margin-left: 16px;
  color: #2d3b48;
  font-size: 14px;

  &:hover {
    color: #605daf;
  }
`;
const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
`;
const SidebarItem = styled.div`
  display: flex;
  align-items: center;
`;

const Submenu = ({ item }) => {
  const [subNav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subNav);
  };

  return (
    <Container>
      <SidebarLink to={item.to} onClick={item.subNav && showSubnav}>
        <SidebarItem>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </SidebarItem>
        <div>
          {item.subNav && subNav
            ? item.iconOpen
            : item.subNav
            ? item.iconClose
            : null}
        </div>
      </SidebarLink>
      {subNav &&
        item.subNav.map((item) => (
          <DropdownLink to={item.to} key={item.id}>
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </Container>
  );
};

export default Submenu;
