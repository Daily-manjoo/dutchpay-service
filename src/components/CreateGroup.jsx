import OverlayForm from "./OverlayForm";
import styled from "styled-components";

export default function CreateGroup() {
  return (
    <MainContainer>
      <h1>모임의 끝</h1>
      <OverlayForm />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
