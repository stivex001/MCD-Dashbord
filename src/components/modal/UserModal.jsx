import styled from "styled-components"

const Container = styled.div`
position: absolute;
top: 60px;
right: 50px;
`;
const Wrapper = styled.div``;

const UserModal = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Welcome</h2>
        <div>
          <span>Profile</span>
        </div>
        <div>
          <span>Settings</span>
        </div>
        <div>
          <span>Lock Screen</span>
        </div>
        <div>
          <span>Logout</span>
        </div>
      </Wrapper>
    </Container>
  )
}

export default UserModal