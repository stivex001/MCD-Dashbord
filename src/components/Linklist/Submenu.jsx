import { useState } from "react";
import {
  Container,
  DropdownLink,
  SidebarItem,
  SidebarLabel,
  SidebarLink,
} from "./subNenustyles";

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
