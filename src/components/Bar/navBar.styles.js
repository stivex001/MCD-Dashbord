import styled from "styled-components";
import { laptop, mobile, tablet } from "../../responsive";

export const Container = styled.div`
  flex: 1;
`;
export const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  background-color: #605daf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;
export const BarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #7471b9;
  border-radius: 50px;
  border: 1px solid #605daf;
  padding: 5px 20px;
  cursor: pointer;
  ${tablet({ padding: "5px" })};
  ${mobile({ display: "none" })};
  ${laptop({ marginLeft: "250px",})};
`;
export const Input = styled.input`
  border: none;
  background-color: #7471b9;
  outline: none;
  color: white;

  ::placeholder {
    color: white;
  }
`;
export const Right = styled.div`
  margin: 20px;
  cursor: pointer;
  position: relative;
`;
export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const NavIcon = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  gap: 50px;
  cursor: pointer;
`;
export const SidebrNav = styled.nav`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.2);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms ease-in-out;
  z-index: 10;
`;
export const SidebarWrap = styled.div`
  width: 100%;
`;
export const SidebarLogo = styled.div`
  background-color: #605daf;
  height: 70px;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
export const LogoTitle = styled.span`
  color: #f5f5f7;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;
// export const IconImg = styled.img`
//   width: 20px;
//   height: 20px;
//   margin-right: 5px;
// `;
export const LogoImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
export const UserContainer = styled.div`
  text-align: center;
  margin: 20px auto;
  postion: sticky;
  top: 0;
`;
export const UserDesc = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
`;
export const Username = styled.span`
  margin: 20px;
  font-size: 16px;
  color: #4a4b4c;
`;
export const Online = styled.div``;
export const Icon = styled.img`
  height: 10px;
  margin-right: 3px;
`;
export const OnlineDesc = styled.span`
  font-size: 13px;
  color: #2d3b48;
`;
export const IconContainer = styled.div`
  margin: 20px;
  cursor: pointer;
`;
export const MenuWrapper = styled.div`
  height: calc(100vh - 300px);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 7px;
    cursor: pointer;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 40px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e7e7f3;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #e7e7f3;
  }
`;

export const IconWrapper = styled.div`
${laptop({ display: "none" })};
`;