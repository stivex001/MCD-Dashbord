import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
// width: 100%;
// height: 50px;
// position: sticky;
// top: 0;
// z-index: 999;
// background-color:#605daf;
`;
export const Wrapper = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
background-color:#605daf;
${tablet({ position: "fixed", top: '0', zIndex: '999' })};
`;
export const LogoContainer = styled.div`
display: flex;
align-items: center;
`;
export const Logo = styled.div`
margin-right: 80px;
display: flex;
justify-content: flex-start;
heigth: 50px;
align-items: center;
cursor: pointer;
${mobile({ marginRight: "20px" })};
${tablet({ marginRight: "15px" })};
`;
export const LogoImg = styled.img`
width: 20px;
height: 20px;
margin-right: 5px;
`;
export const LogoTitle = styled.span`
color: white;
font-size: 700;
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
export const ImgContainer = styled.div``;
export const UserImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`;

export const SidebarNav = styled.nav`
background-color: #ffffff;
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
-moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
width: 250px;
heigth: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 10px;
left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
transition: 350ms ease-in-out;
z-index: 10;
`;
export const SidebarWrap = styled.div`
width: 100%;
`;
export const SidebarLogo = styled.div`
background-color:#605daf;
padding-left: 20px;
display: flex;
justify-content: flex-start;
align-items: center;
cursor: pointer;
`;
