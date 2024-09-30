import OverlayForm from "./OverlayForm";
import styled from "styled-components";

export default function CreateGroup() {
  return (
    <StyledMain>
      <h1>모임의 끝</h1>
      <OverlayForm />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
