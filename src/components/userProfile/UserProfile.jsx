import { CameraAlt, Phone } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 10px;
`;
const Wrapper = styled.div`
background-color: #181b2c;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 50px;
color: white;
`;
const Left = styled.div``;
const UserImg = styled.img``;
const Username = styled.p``;
const Fullname = styled.p``;
const Brandname = styled.span``;
const Right = styled.div`
`;
const Desc = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const UserDesc = styled.p``;
const Span = styled.span``;

const UserProfile = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <UserImg src="" alt="" />
                <CameraAlt />
                <Username>Samji</Username>
                <Fullname>Odejinmi Samuel</Fullname>
                <Brandname>Samji Ventures (superadmin)</Brandname>
            </Left>
            <Right>
                <Desc>
                    <Phone />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Phone />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Phone />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Phone />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Phone />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Phone />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Phone />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Phone />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Phone />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Phone />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default UserProfile