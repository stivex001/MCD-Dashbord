import styled from "styled-components";

export const Container = styled.div`
// width: 100%;
// height: 50px;
// position: sticky;
// top: 0;
// z-index: 999;
// background-color:#605daf;
`;
export const Wrapper = styled.div`
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
background-color:#605daf;
`;
export const LogoContainer = styled.div`
display: flex;
align-items: center;
`;
export const Logo = styled.div`
margin-right: 20px;
display: flex;
justify-content: flex-start;
heigth: 50px;
align-items: center;
cursor: pointer;
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
background-color:#605daf;
width: 250px;
heigth: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
transition: 350ms ease-in-out;
z-index: 10;
`;
export const SidebarWrap = styled.div`
width: 100%;
`;
