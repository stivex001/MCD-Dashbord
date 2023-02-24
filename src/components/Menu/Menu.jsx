import {  Tv } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LinkList from "../Linklist/LinkList";
import {
  Container,
  Heading,
  LinkMenu,
  ListItem,
  Span,
  UnListItem,
  Wrapper,
} from "./menu.styles";

const Menu = () => {
  return (
    <Container>
      <Heading>Main</Heading>
      <Wrapper>
        <LinkMenu>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <UnListItem>
              <Tv
                style={{
                  marginRight: "5px",
                  fontSize: "20px",
                  color: '#2d3b48',
                }}
              />
              <Span>Dashboard</Span>
            </UnListItem>
          </Link>
          <ListItem>
            <LinkList />
          </ListItem>
        </LinkMenu>
      </Wrapper>
    </Container>
  );
};

export default Menu;
