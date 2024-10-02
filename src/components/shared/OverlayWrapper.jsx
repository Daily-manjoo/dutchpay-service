import styled from "styled-components";

export default function OverlayWrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  min-height: ${(props) => props.minHeight || "0"};
`;
