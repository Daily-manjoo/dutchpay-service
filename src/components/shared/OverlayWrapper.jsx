import styled from "styled-components";

export default function OverlayWrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  padding: ${(props) => props.padding || "5vw"};
  min-height: 100%;
`;
