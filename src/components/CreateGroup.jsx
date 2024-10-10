import OverlayForm from "./OverlayForm";
import styled from "styled-components";

export default function CreateGroup() {
  return (
    <MainContainer>
      <h1>Dutch Pay</h1>
      <OverlayForm />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    letter-spacing: 10px;
    font-weight: 200;
    color: slateblue;
    text-align: center;
  }
`;
