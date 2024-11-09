import styled from "styled-components";

export default function OverlayWrapper({ children, padding }) {
  return <Container padding={padding}>{children}</Container>;
}

const Container = styled.div`
  padding: ${(props) => props.padding || "5vw"};
`;
