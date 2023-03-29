import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
`;
export const Wrapper = styled.div`
  background-color: rgba(248, 249, 250, 255) s;
  padding: 24px;
  text-align: center;
`;
export const Heading = styled.p`
  color: #4a4b4c;
  font-size: 40px;
`;
export const Desc = styled.span`
  font-size: 16px;
  margin: 10px 0;
`;
export const InputContainer = styled.div`
  margin: 20px 0;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const Label = styled.label`
  font-size: 14px;
  color: #2d3b48;
`;
export const Input = styled.input`
  &::-webkit-slider-runnable-track {
    height: 6px;
    background-color: #6c757d;
    border-radius: 5px;
  }
  &::-webkit-slider-thumb {
    display: none;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Qty = styled.span`
  font-size: 14px;
  color: #8c9ea9;
`;
