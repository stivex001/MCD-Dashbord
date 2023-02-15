import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
`;
export const Wrapper = styled.div`
postion: sticky;
top: 0;
left: 0;
z-index: 999;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  background-color: #605daf;
  padding: 15px;
`;
export const LogoImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
export const LogoTitle = styled.span`
  color: white;
  font-weight: 700;
`;
export const UserContainer = styled.div`
text-align: center;
`;
export const IconContainer = styled.div`
cursor: pointer;
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
margin: 30px auto;
`;
export const Username = styled.span``;
export const Online = styled.div`
margin: 20px;
`;
export const Icon = styled.img`
height: 10px;
margin-right: 10px;
`;
export const OnlineDesc = styled.span``;