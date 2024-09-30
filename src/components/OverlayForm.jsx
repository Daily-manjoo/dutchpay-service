import styled from "styled-components";

export default function OverlayForm() {
  return (
    <StyledOverlayForm>
      <StyledGroupImgDiv />
      <StyledSetGroupDiv>
        <h2>모임 이름 정하기</h2>
        <p>먼저 더치페이 할 모임의 이름을 정해볼까요?</p>
        <StyledGroupLabelDiv>
          <p>모임명</p>
          <StyledGroupNameInput />
        </StyledGroupLabelDiv>
        <StyledGroupNameSaveButton>
          <p>저장하고 다음 단계로</p>
        </StyledGroupNameSaveButton>
      </StyledSetGroupDiv>
    </StyledOverlayForm>
  );
}

const StyledOverlayForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 412px;
  height: 532px;
  background-color: beige;
`;

const StyledGroupImgDiv = styled.div`
  margin: 40px;
  width: 332px;
  height: 141px;
  background-image: url("/dutchpay.jpg");
  background-size: cover;
  background-position: center;
`;

const StyledSetGroupDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 228px;
  background-color: white;

  h2 {
    margin: 0;
  }
`;

const StyledGroupLabelDiv = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 70px;

  p {
    margin: 0 0 8 0px;
    font-weight: 800;
  }
`;

const StyledGroupNameInput = styled.input`
  width: 210px;
  border: 1px solid black;
  flex-grow: 1;
  border-radius: 4px;
  padding: 4px;
`;

const StyledGroupNameSaveButton = styled.button`
  background-color: #7749f8;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  color: white;
`;
